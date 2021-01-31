<?php

namespace Database\Seeders;

use App\Models\Estimator;
use App\Models\User;
use Illuminate\Database\Seeder;

class EstimatorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'Adaline' => [
                'desc' => 'Adaptive Linear Neuron is a single layer neural network with a continuous linear output neuron suitable for regression tasks. Training is equivalent to solving L2 regularized linear regression (Ridge) online using Mini Batch Gradient Descent.',
                'ranked' => true,
                'steps' => true,
            ],
            'ExtraTreeRegressor' => [
                'desc' => 'Extremely Randomized Regression Trees differ from standard Regression Trees in that they choose candidate splits at random rather than searching the entire feature column for the best value to split on. Extra Trees are also faster to build and their predictions have higher variance than a regular decision tree regressor.',
                'ranked' => true,
                // 'balance' => true,
            ],
            'GradientBoost' => [
                'desc' => 'Gradient Boost (GBM) is a stage-wise additive ensemble that uses a Gradient Descent boosting scheme for training boosters (Decision Trees) to correct the error residuals of a series of weak base learners. Stochastic gradient boosting is achieved by varying the ratio of samples to subsample uniformly at random from the training set. GBM also utilizes progress monitoring via an internal validation set for snapshotting and early stopping.',
                'ranked' => true,
                'steps' => true,
            ],
            'KDNeighborsRegressor' => [
                'desc' => 'A fast implementation of KNN Regressor using a spatially-aware binary tree for nearest neighbors search. K-d Neighbors Regressor works by locating the neighborhood of a sample via binary search and then does a brute force search only on the samples close to or within the neighborhood of the unknown sample. The main advantage of K-d Neighbors over brute force KNN is inference speed, however, it cannot be partially trained.',
                // 'tree' => true
            ],
            'KNNRegressor' => [
                'desc' => 'K Nearest Neighbors (KNN) is a brute-force distance-based learner that locates the k nearest training samples from the training set and averages their labels to make a prediction. K Nearest Neighbors (KNN) is considered a lazy learner because it performs most of its computation at inference time.'
            ],
            'MLPRegressor' => [
                'desc' => 'A multilayer feed-forward neural network with a continuous output layer suitable for regression problems. The Multilayer Perceptron regressor is able to handle complex non-linear regression problems by forming higher-order representations of the input features using intermediate user-defined hidden layers. The MLP also has network snapshotting and progress monitoring to ensure that the model achieves the highest validation score per a given training time budget.',
                'steps' => true
            ],
            'RadiusNeighborsRegressor' => [
                'desc' => 'This is the regressor version of Radius Neighbors implementing a binary spatial tree under the hood for fast radius queries. The prediction is a weighted average of each label from the training set that is within a fixed user-defined radius.',
                // 'tree' => true,
            ],
            'RegressionTree' => [
                'desc' => 'A decision tree based on the CART (Classification and Regression Tree) learning algorithm that performs greedy splitting by minimizing the variance of the labels at each node split. Regression Trees can be used on their own or as the booster in algorithms such as Gradient Boost.',
                'ranked' => true,
                // 'balance' => true,
            ],
            'Ridge' => [
                'desc' => 'L2 regularized linear regression solved using a closed-form solution. The addition of regularization, controlled by the alpha hyper-parameter, makes Ridge less likely to overfit the training data than ordinary least squares (OLS).',
                'ranked' => true,
            ]
        ];

        $user = User::role('ADMIN')->first();

        foreach ($data as $name => $estimator) {
            Estimator::withoutEvents(function () use ($name, $estimator, $user) {
                return Estimator::create([
                    'name' => $name,
                    'desc' => $estimator['desc'],
                    'steps' => isset($estimator['steps']),
                    'ranked' => isset($estimator['ranked']),
                    'user_id' => $user->id
                ]);
            });
        }
    }
}
