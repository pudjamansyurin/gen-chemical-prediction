import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score

# functions
def genPolyModel(X_train, Y_train, Deg):
    features = PolynomialFeatures(degree=Deg)
    # transforms the existing features to higher degree features.
    X_train_poly = features.fit_transform(X_train)
    # fit the transformed features to Linear Regression
    model = LinearRegression()
    model.fit(X_train_poly, Y_train)
    # predicting on training data-set
    Y_train_predicted = model.predict(X_train_poly)
    # evaluating the model on training dataset
    rmse_train = np.sqrt(mean_squared_error(Y_train, Y_train_predicted))
    r2_train = r2_score(Y_train, Y_train_predicted)

    return model, features, rmse_train, r2_train

def predict(model, features, X_test):
    # predicting on test data-set
    X_test_poly = features.fit_transform([X_test])
    Y_test_predicted = model.predict(X_test_poly)
    
    return Y_test_predicted[0]


# main program    
# the input parameter
poly_orde = 7
X_name_tests = ['F540-11', 'F540-34', 'F540-35']
X_value_tests = [
    [68.70,  0.00,  0, 5, 5, 0,	14.3,  0, 7],
    [15.70, 20.00, 30, 0, 5, 5, 14.3, 10, 0],
    [ 7.36, 23.33, 35, 0, 5, 5, 14.3, 10, 0],
]

# columns to process
X_cols = ['S8','S6','S4','GL 0831','Triester','Priolube/palmester 3970','CV1103','SPAMA52','VM-HV']
Y_cols = ['KV 40', 'KV 100', 'VI']

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
    model, features, rmse, r2score = genPolyModel(X_train, df_target[Y_col], poly_orde)

    print('{}\t(DB: {}, R2: {}, RMSE: {}) :'.format(Y_col, len(X_train), r2score, rmse))
    # print(' - DB Used \t: {}'.format(len(X_train)))
    # print(' - R2 Score \t: {}'.format(r2score))
    # print(' - RMSE \t: {}'.format(rmse))

    for idx, X_name_test in enumerate(X_name_tests):
        predicted = predict(model, features, X_value_tests[idx])
        print(' - {} \t: {:.2f}\t'.format(X_name_test, predicted))
    













# import statsmodels.api as sm
# # adding a constant
# X = sm.add_constant(X) 
# model = sm.OLS(Y, X).fit()
# predictions = model.predict(X) 
# print_model = model.summary()
# print(print_model)
