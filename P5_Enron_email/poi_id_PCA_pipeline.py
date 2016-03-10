#!/usr/bin/python


import sys
import pickle
sys.path.append("../tools/")
import matplotlib.pyplot
import numpy as np
import scipy.stats as st

from feature_format import featureFormat, targetFeatureSplit
from tester import dump_classifier_and_data
from tester import test_classifier 
from sklearn.pipeline import Pipeline, FeatureUnion
from sklearn.preprocessing import FunctionTransformer
from sklearn.feature_selection import SelectKBest, chi2
from sklearn.metrics import make_scorer

from sklearn.preprocessing import MinMaxScaler
from sklearn.grid_search import GridSearchCV
from sklearn.metrics import classification_report
from sklearn.metrics import confusion_matrix
from sklearn.decomposition import RandomizedPCA, PCA
from sklearn.svm import SVC
from sklearn.cluster import KMeans
from sklearn.ensemble import AdaBoostClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.cross_validation import KFold
from sklearn.cross_validation import StratifiedShuffleSplit
from sklearn.cross_validation import StratifiedKFold

from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectKBest, f_regression
from sklearn.pipeline import make_pipeline
from sklearn.metrics import classification_report


def custom_scorer(labels, predictions):
    precision,recall = precision_recall(labels,predictions)
    min_score = min(precision,recall)
    return min_score
score  = make_scorer(custom_scorer, greater_is_better=True)

def precision_recall(labels,predictions):
    ind_true_pos = [i for i in range(0,len(labels)) if (predictions[i]==1) & (labels[i]==1)]
    ind_false_pos = [i for i in range(0,len(labels)) if ((predictions[i]==1) & (labels[i]==0))]
    ind_false_neg = [i for i in range(0,len(labels)) if ((predictions[i]==0) & (labels[i]==1))]
    ind_true_neg = [i for i in range(0,len(labels)) if ((predictions[i]==0) & (labels[i]==0))]
    precision = 0
    recall = 0
    
    
    ind_labels = [i for i in range(0,len(labels)) if labels[i]==1]
    
    if len(ind_labels) !=0:
        if float( len(ind_true_pos) + len(ind_false_pos))!=0:
            precision = float(len(ind_true_pos))/float( len(ind_true_pos) + len(ind_false_pos))
        if float( len(ind_true_pos) + len(ind_false_neg))!=0:
            recall = float(len(ind_true_pos))/float( len(ind_true_pos) + len(ind_false_neg))
        return precision, recall
    else:
        return -1,-1

def features_pca(features_fin,n_comp):
    scaler = MinMaxScaler()
    finance_scaler = scaler.fit(features_fin)
    features_fin = finance_scaler.transform(features_fin)

    pca = PCA(n_components=n_comp).fit(features_fin)
    #print 'pca', pca
    features_fin = pca.transform(features_fin)
    features_fin = np.array(features_fin)
    return pca, features_fin

### Task 1: 
### features_list is a list of strings, each of which is a feature name.
### The first feature must be "poi".



#features to use ['poi','salary','bonus','total_payments','restricted_stock','other']

features_list = ['poi']
### Load the dictionary containing the dataset
with open("final_project_dataset.pkl", "r") as data_file:
    data_dict = pickle.load(data_file)
    
    
feature_all = data_dict[data_dict.keys()[1]].keys()

# Counting instances before removing outliers/missing data
print ''
print ''
print 'Instances BEFORE removing outliers/missing data'
for f_i in range(0,len(feature_all)):
    f_all = feature_all
    feature_count = [k for k,v in data_dict.items() if isinstance(v[f_all[f_i]],int)]
    print f_all[f_i], len(feature_count)
        

### Task 2: Remove outliers/missing values
key_rm  = list()
for key in data_dict:
    in_salary = isinstance(data_dict[key]['salary'],int)
    in_ToMsg = isinstance(data_dict[key]['to_messages'],int)
    in_bonus = isinstance(data_dict[key]['bonus'],int)
    in_resSt = isinstance(data_dict[key]['restricted_stock'],int)
    
    if (in_salary==False):
        key_rm.append(key)
	
    if (in_salary & in_bonus): 
		if ((data_dict[key]['bonus']>=5000000.0) & (data_dict[key]['salary']>=5000000.0) ):
			key_rm.append(key)
            
	    
print ''
print ''
print 'Number of outliers/missing values removed = ', len(key_rm)

for ki in key_rm:
	data_dict.pop( ki, 0 )

# Counting instances AFTER removing outliers/missing data
print ''
print ''
print 'Instances AFTER removing outliers/missing data'
for f_i in range(0,len(feature_all)):
    f_all = feature_all
    feature_count = [k for k,v in data_dict.items() if isinstance(v[f_all[f_i]],int)]
    print f_all[f_i], len(feature_count)
    
print data_dict[data_dict.keys()[1]]
print len(data_dict[data_dict.keys()[1]].keys())
## MAKING NEW FEATURES    
features_list = ["poi"]
for key in data_dict:
    
    data_dict[key]['log_total'] = 0
    data_dict[key]['log_bonus'] = 0
    data_dict[key]['log_restricted'] = 0
    data_dict[key]['log_other'] = 0
    data_dict[key]['log_salary'] = 0
    data_dict[key]['log_exercised_stock_options'] = 0
    data_dict[key]['log_long_term_incentive'] = 0
    data_dict[key]['log_total_stock_value'] = 0
    data_dict[key]['log_expense'] = 0

    
    in_salary = isinstance(data_dict[key]['salary'],int)
    in_ToMsg = isinstance(data_dict[key]['to_messages'],int)
    in_bonus = isinstance(data_dict[key]['bonus'],int)
    in_resSt = isinstance(data_dict[key]['restricted_stock'],int)
    in_TPay = isinstance(data_dict[key]['total_payments'],int)
    in_Othr = isinstance(data_dict[key]['other'],int)
    in_exrSt = isinstance(data_dict[key]['exercised_stock_options'],int)
    in_LTI = isinstance(data_dict[key]['long_term_incentive'],int)
    in_totSt = isinstance(data_dict[key]['total_stock_value'],int)
    in_exp = isinstance(data_dict[key]['expenses'],int)

    if  (in_salary):
        
        v_salary = float(data_dict[key]['salary'])
        v_totpay = float(data_dict[key]['total_payments'])
        v_bonus = float(data_dict[key]['bonus'])
        v_ResSt = float(data_dict[key]['restricted_stock'])
        v_Other = float(data_dict[key]['other'])
        v_exrSt = float(data_dict[key]['exercised_stock_options'])
        v_LTI = float(data_dict[key]['long_term_incentive'])
        v_totSt = float(data_dict[key]['total_stock_value'])
        v_exps = float(data_dict[key]['expenses'])

        
        data_dict[key]['log_salary'] = np.log(v_salary)
        
        
        if (in_TPay):
            data_dict[key]['log_total'] = np.log(v_totpay ) 
        if (in_bonus):
            data_dict[key]['log_bonus'] =  np.log(v_bonus) 
        if (in_resSt):
            data_dict[key]['log_restricted'] =  np.log(v_ResSt) 
        if (in_Othr):
            data_dict[key]['log_other'] =  np.log(v_Other)  
        if (in_exrSt):
            data_dict[key]['log_exercised_stock_options'] =  np.log(v_exrSt)  
        if (in_LTI):
            data_dict[key]['log_long_term_incentive'] =  np.log(v_LTI)  
        if (in_totSt):
            data_dict[key]['log_total_stock_value'] =  np.log(v_totSt)  
        if (in_exp):
            data_dict[key]['log_expense'] =  np.log(v_exps)  
         
        
    data_dict[key]['to_ratio'] = 0
    data_dict[key]['from_ratio'] = 0
    data_dict[key]['from_poi_ratio'] = 0
    data_dict[key]['to_poi_ratio'] = 0
    data_dict[key]['to_mail_ratio'] = 0

    is_frmPoiToThis = isinstance(data_dict[key]['from_poi_to_this_person'],int)
    is_frmThisToPoi = isinstance(data_dict[key]['from_this_person_to_poi'],int)

    if  is_frmPoiToThis & is_frmThisToPoi:
        poi_fr = float(data_dict[key]['from_poi_to_this_person'])
        poi_to = float(data_dict[key]['from_this_person_to_poi'])        
        poi_sh= float(data_dict[key]['shared_receipt_with_poi'])        
        total_to = float(data_dict[key]['to_messages'])    
        total_frm= float(data_dict[key]['from_messages'])    
        poi_tot = poi_to+poi_fr+poi_sh
        if total_to!= 0:
            data_dict[key]['to_ratio'] = np.log(poi_to/total_to + 1)
        if total_frm!= 0:
            data_dict[key]['from_ratio'] = np.log(poi_fr/total_frm + 1)
            data_dict[key]['to_mail_ratio'] = np.log(total_to/(total_to+total_frm) + 1)
            
        if poi_tot!= 0:
            data_dict[key]['to_poi_ratio'] =  np.log(poi_to/(poi_to+poi_fr+poi_sh) + 1)
            data_dict[key]['from_poi_ratio'] = np.log(poi_fr/(total_to+total_frm) + 1)
            
features_list.append('log_salary')
features_list.append('log_total')
features_list.append('log_bonus')
features_list.append('log_restricted')
features_list.append('log_other')
features_list.append('log_exercised_stock_options')
features_list.append('log_long_term_incentive')
features_list.append('log_total_stock_value')
features_list.append('log_expense')

n_fin = len(features_list)-1
features_list.append('to_ratio') # Total to poi divided by total to messages
features_list.append('from_ratio') # Total to poi divided by total to messages
features_list.append('to_poi_ratio') # Total mails to POI divided by total interaction with poi.
features_list.append('from_poi_ratio') # Total from to total messages
features_list.append('to_mail_ratio') # Number of to mails divided by total mails



my_dataset = data_dict


features_list = ['poi','log_salary','log_total','log_bonus','log_restricted',
                 'log_other','log_exercised_stock_options','log_long_term_incentive',
                'log_total_stock_value','log_expense']
n_fin = len(features_list)-1
features_list.append('to_ratio') # Total to poi divided by total to messages
features_list.append('from_ratio') # Total to poi divided by total to messages
features_list.append('to_poi_ratio') # Total mails to POI divided by total interaction with poi.
features_list.append('from_poi_ratio') # Total from to total messages
features_list.append('to_mail_ratio') # Number of to mails divided by total mails

data = featureFormat(my_dataset, features_list, sort_keys = True)
labels, features = targetFeatureSplit(data)


param_grid = {
         'clf__C': [1,5,10,50,100,150,400,500],
          'clf__gamma': [0.005, 0.01, 0.02,0.03,0.04],
          'features__PC_fin__PCA__n_components':[2,3,4,5,6],
          'features__Eml__SelectK__k':[2,3,4]  
          }



pipeline_SVC = Pipeline([
    ('features', FeatureUnion([
        ('PC_fin', Pipeline([
            ('extract_fin', FunctionTransformer(lambda X: X[:, range(0,9)])),
            ('scale_fin', MinMaxScaler()),
            ('PCA',   PCA()),
        ])),
        ('Eml', Pipeline([
            ('extract', FunctionTransformer(lambda X: X[:, range(9,14)])),
            ('SelectK', SelectKBest(chi2)),
        ]))            
                    
    ])),
    ('clf', SVC(kernel='rbf', class_weight='balanced'))
])


print 'Grid search'
sss = StratifiedShuffleSplit(labels, 25, test_size=0.3, random_state=42)
                       
gridCV_object = GridSearchCV(estimator = pipeline_SVC, 
                                         param_grid = param_grid, 
                                         cv = sss,scoring=score
                                        )

#print gridCV_object.get_params().keys()
gridCV_object.fit(features,labels)
clf = gridCV_object.best_estimator_
print clf
print gridCV_object.best_score_

print 'Model built'

#sss = StratifiedShuffleSplit(labels, 1000, test_size=0.1, random_state=42)
#get_CI_mean_PrecisionRecall(np.array(features),labels_array,clf,sss)
    
import dill
test_classifier(clf,my_dataset,features_list,folds = 1000)


#test_classifier(clf,my_dataset,features_list,folds = 1)
### Task 6: Dump your classifier, dataset, and features_list so anyone can
### check your results. You do not need to change anything below, but make sure
### that the version of poi_id.py that you submit can be run on its own and
### generates the necessary .pkl files for validating your results.


dump_classifier_and_data(clf, my_dataset, features_list)