import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.metrics import mean_squared_error, r2_score

# prediction
def predict(X_train,Y_train,X_value_tests,Deg):
    poly_features = PolynomialFeatures(degree=Deg)
    # transforms the existing features to higher degree features.
    X_train_poly = poly_features.fit_transform(X_train)
    # fit the transformed features to Linear Regression
    poly_model = LinearRegression()
    poly_model.fit(X_train_poly, Y_train)
    # predicting on training data-set
    Y_train_predicted = poly_model.predict(X_train_poly)
    # predicting on test data-set
    X_value_tests_poly = poly_features.fit_transform([X_value_tests])
    Y_test_predict = poly_model.predict(X_value_tests_poly)
    # evaluating the model on training dataset
    rmse_train = np.sqrt(mean_squared_error(Y_train, Y_train_predicted))
    r2_train = r2_score(Y_train, Y_train_predicted)
    
    return Y_test_predict[0], rmse_train


    
# the input parameter
X_name_tests = ['F540-34', 'F540-35']
X_value_tests = [
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

for idx, X_name_test in enumerate(X_name_tests):
    print("({}) -------------------------------------------".format(X_name_test))
    for Y_col in Y_cols:
        # filter only for filled target
        has_target = df[Y_col] > 0
        df_target = df[has_target]

        # decide the column used
        X_train = df_target[X_cols]
        # print(df_target)

        # predicted value
        predicted, rmse = predict(X_train, df_target[Y_col], X_value_tests[idx], poly_orde)

        print('{}\t: {}\t({})'.format(Y_col, predicted, rmse))













# import statsmodels.api as sm
# # adding a constant
# X = sm.add_constant(X) 
# model = sm.OLS(Y, X).fit()
# predictions = model.predict(X) 
# print_model = model.summary()
# print(print_model)
