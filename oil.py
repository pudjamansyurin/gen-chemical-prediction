import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score

# prediction
def generateModel(X_train,Y_train, Deg):
    poly_features = PolynomialFeatures(degree=Deg)
    # transforms the existing features to higher degree features.
    X_train_poly = poly_features.fit_transform(X_train)
    # fit the transformed features to Linear Regression
    poly_model = LinearRegression()
    poly_model.fit(X_train_poly, Y_train)
    # predicting on training data-set
    Y_train_predicted = poly_model.predict(X_train_poly)
    # evaluating the model on training dataset
    rmse_train = np.sqrt(mean_squared_error(Y_train, Y_train_predicted))
    r2_train = r2_score(Y_train, Y_train_predicted)

    return poly_model, poly_features, rmse_train, r2_train

def predict(model, features, X_test):
    # predicting on test data-set
    X_test_poly = features.fit_transform([X_test])
    Y_test_predicted = model.predict(X_test_poly)
    
    return Y_test_predicted[0]



    
# the input parameter
poly_orde = 13
X_name_tests = ['F540-34', 'F540-35']
X_value_tests = [
    [    15.7,        20, 30, 0, 5, 5, 14.3, 10, 0],
    [7.366667,  23.33333, 35, 0, 5, 5, 14.3, 10, 0],
]

# columns to process
X_cols = ['S8','S6','S4','GL 0831','Triester','Priolube/palmester 3970','CV1103','SPAMA52','VM-HV']
Y_cols = ['KV 40', 'KV 100']

# open files
df = pd.read_csv("oil.csv")
df.fillna(0, inplace=True)

for Y_col in Y_cols:
    # filter only for filled target
    has_target = df[Y_col] > 0
    df_target = df[has_target]
    # decide the column used
    X_train = df_target[X_cols]
    # generate model
    model, features, rmse, r2score = generateModel(X_train, df_target[Y_col], poly_orde)

    print('{} :'.format(Y_col))
    print(' - DB Used \t: {:.2f}'.format(len(X_train)))
    print(' - R2 Score \t: {:.2f}'.format(r2score))
    print(' - RMSE \t: {:.2f}'.format(rmse))

    for idx, X_name_test in enumerate(X_name_tests):
        predicted = predict(model, features, X_value_tests[idx])
        print(' -- {} \t: {:.2f}\t'.format(X_name_test, predicted))
    













# import statsmodels.api as sm
# # adding a constant
# X = sm.add_constant(X) 
# model = sm.OLS(Y, X).fit()
# predictions = model.predict(X) 
# print_model = model.summary()
# print(print_model)
