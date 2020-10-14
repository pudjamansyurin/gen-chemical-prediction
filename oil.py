import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score

# prediction
def predict(X_train,Y_train,X_test,Deg):
    poly_features = PolynomialFeatures(degree=Deg)
    # transforms the existing features to higher degree features.
    X_train_poly = poly_features.fit_transform(X_train)
    # fit the transformed features to Linear Regression
    poly_model = LinearRegression()
    poly_model.fit(X_train_poly, Y_train)
    # predicting on training data-set
    Y_train_predicted = poly_model.predict(X_train_poly)
    # predicting on test data-set
    X_test_poly = poly_features.fit_transform(X_test)
    Y_test_predict = poly_model.predict(X_test_poly)
    
    # evaluating the model on training dataset
    rmse_train = np.sqrt(mean_squared_error(Y_train, Y_train_predicted))
    r2_train = r2_score(Y_train, Y_train_predicted)
    
    # evaluating the model on test dataset
    # rmse_test = np.sqrt(mean_squared_error(Y_test, Y_test_predict))
    # r2_test = r2_score(Y_test, Y_test_predict)
    
    # print("The model performance for the dataset set")
    print("-------------------------------------------")
    print("RMSE of training set\t\t: {}".format(rmse_train))
    # print("R2 score of training set\t: {}".format(r2_train))
    # print("\n")    
    # print("The model performance for the test set")
    # print("-------------------------------------------")
    # print("RMSE of test set is {}".format(rmse_test))
    # print("R2 score of test set is {}".format(r2_test))
    
    return Y_test_predict





    
# the input parameter
X_test = [
    [    15.7,        20, 30, 0, 5, 5, 14.3, 10, 0],
    [7.366667,  23.33333, 35, 0, 5, 5, 14.3, 10, 0],
]
poly_orde = 6

# columns to process
X_cols = ['S8','S6','S4','GL 0831','Triester','Priolube/palmester 3970','CV1103','SPAMA52','VM-HV']
Y_cols = ['KV 40', 'KV 100']

# open files
df = pd.read_csv("oil.csv")
df.fillna(0, inplace=True)
# print(df['Formula'])

for Y_col in Y_cols:
    # filter only for filled target
    has_target = df[Y_col] > 0
    df_target = df[has_target]

    # decide the column used
    X_train = df_target[X_cols]
    # print(df_target)

    # predicted value
    print('Predicted ({})\t\t: {}'.format(Y_col, predict(X_train, df_target[Y_col], X_test, poly_orde)))

# import statsmodels.api as sm
# # adding a constant
# X = sm.add_constant(X) 
# model = sm.OLS(Y, X).fit()
# predictions = model.predict(X) 
# print_model = model.summary()
# print(print_model)
