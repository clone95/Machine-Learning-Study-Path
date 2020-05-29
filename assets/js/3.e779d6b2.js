(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{350:function(e,t,a){e.exports=a.p+"assets/img/classification.4760eb57.png"},351:function(e,t,a){e.exports=a.p+"assets/img/regression.741f3942.png"},352:function(e,t,a){e.exports=a.p+"assets/img/instance.2dde7c74.png"},353:function(e,t,a){e.exports=a.p+"assets/img/model.d563b99c.png"},354:function(e,t,a){e.exports=a.p+"assets/img/overfitting.9a10756d.png"},373:function(e,t,a){"use strict";a.r(t);var n=a(43),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#index"}},[e._v("Index")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#types-of-ml-systems"}},[e._v("Types of ML systems")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#supervised-learning"}},[e._v("Supervised Learning")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#unsupervised-learning"}},[e._v("Unsupervised Learning")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#reinforcement-learning"}},[e._v("Reinforcement learning")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#learning-modes"}},[e._v("Learning modes")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#type-of-inference"}},[e._v("Type of inference")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#main-challenges-of-machine-learning"}},[e._v("Main challenges of Machine Learning")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#insufficient-amount-of-data"}},[e._v("Insufficient amount of data")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#low-quality-and-unrepresentative-data"}},[e._v("Low quality and unrepresentative data")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#underfitting"}},[e._v("Underfitting")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#overfitting"}},[e._v("Overfitting")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#underfitting-and-overfitting-tradeoff"}},[e._v("Underfitting and overfitting tradeoff")])])])]),e._v(" "),n("li",[n("a",{attrs:{href:"#conclusions"}},[e._v("Conclusions")])])]),e._v(" "),n("h2",{attrs:{id:"types-of-ml-systems"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#types-of-ml-systems"}},[e._v("#")]),e._v(" Types of ML systems")]),e._v(" "),n("p",[e._v("There are three main categories of ML systems:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Modalities of supervision (supervised, unsupervised, reinforcement learning)")])]),e._v(" "),n("li",[n("p",[e._v("Learning modes (online learning, batch learning)")])]),e._v(" "),n("li",[n("p",[e._v("Type of inference (instance-based, model-based)")])])]),e._v(" "),n("p",[e._v('These criteria are not mutually exclusive and can be combined according to the needs of the scenario: a self-driving machine could take advantage of an ML system of supervised learning, which learns through batch learning and which "thinks" thanks to a statistical model that allows it to make short-term predictions ("the machine in front is braking, I will soon have to activate the brakes").')]),e._v(" "),n("h2",{attrs:{id:"supervised-learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#supervised-learning"}},[e._v("#")]),e._v(" Supervised Learning")]),e._v(" "),n("p",[e._v("The most common learning mode is "),n("strong",[e._v("supervised learning")]),e._v('. It consists of training the system through data containing the desired solution: these solutions are called "labels".')]),e._v(" "),n("p",[e._v('An example of a "labeled" data could be the image of a car (the actual data) with the assigned car model (the label).\nOnce an ML system has been trained on the data and their labels, the system can input a new image and output its (supposed) label! The metrics to measure the system\'s "skill" in assigning the right label are various and will be examined in more detail in different guides.')]),e._v(" "),n("p",[e._v("The two most common tasks that can be tackled with supervised learning are classification and regression. A "),n("strong",[e._v("classification")]),e._v(" problem consists of assigning a discrete label to new input. It can be a numerical value or a category (e.g. given a picture to say if it represents a dog or a cat), but in any case, it is contained in a well-defined set of options.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(350),alt:"Figure 1-1"}})]),e._v(" "),n("p",[e._v("A problem of "),n("strong",[e._v("regression")]),e._v(" instead consists of assigning a continuous value to the new data, for example, the price of a house given a set of values (the number of rooms for example) so the output will be included in a continuous interval and not a finite set.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(351),alt:"Figure 1-1"}})]),e._v(" "),n("p",[e._v("Supervised learning implies a significant labeled dataset should be provided to allow the model to learn from it effectually.")]),e._v(" "),n("p",[e._v("The classic example is a model that is trained on a dataset of thousands of images of dogs and cats and learns to classify the new photos that are offered in one of these two categories.\nClassification models can learn to distinguish any number of classes, as long as they have a representative dataset!")]),e._v(" "),n("p",[e._v("Usually, the classification models foresee a continuous value as the probability of an input example belonging to each output class. Probabilities can be interpreted as the model's confidence that a specific example belongs to each class. A predicted probability can be converted into a class value by selecting the label of the class with the highest probability.")]),e._v(" "),n("h2",{attrs:{id:"unsupervised-learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#unsupervised-learning"}},[e._v("#")]),e._v(" Unsupervised Learning")]),e._v(" "),n("p",[e._v("But what if we don't have labeled data or our goal is to find something we don't know about it?")]),e._v(" "),n("p",[e._v("This is where "),n("strong",[e._v("unsupervised learning")]),e._v(' comes into play because the input is composed of "raw" data, without the use of labels.')]),e._v(" "),n("p",[e._v("For example, let's imagine that we have a supermarket sales dataset containing all the purchases made by customers, cart by cart. You can extract business advice by grouping the items often purchased together and choose to put them on nearby shelves or to discount one if you buy the others.")]),e._v(" "),n("p",[e._v("Unsupervised learning is also used as a complement to supervised learning to explore data (even if already labeled) and find other types of grouping that had not been noticed (and thus increase the amount of knowledge we have on each instance of the dataset).")]),e._v(" "),n("p",[e._v("Another use of this type of learning is for "),n("strong",[e._v("dimensionality reduction")]),e._v(', having the purpose of reducing the number of features to consider maintaining the "value" of the data, something handy when the dataset is vast and sparse.')]),e._v(" "),n("h2",{attrs:{id:"reinforcement-learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reinforcement-learning"}},[e._v("#")]),e._v(" Reinforcement learning")]),e._v(" "),n("p",[n("strong",[e._v("Reinforcement learning")]),e._v(" is something totally different. The learning system in this context is called "),n("strong",[e._v("agent")]),e._v(" and learns to solve the problem by observing the world around it (through some kind of sensor), performing actions, and evaluating them (good action / bad action) based on some kind of reward (reward).")]),e._v(" "),n("p",[e._v("The agent is designed so that it tries to improve itself, adjusting its parameters of action in action and aiming to obtain a greater and greater reward.")]),e._v(" "),n("p",[e._v("Reinforcement learning is used massively in robotics, where for example a robot learns to move in the surrounding environment by learning incrementally from its mistakes (the reward decreases by slamming against a wall, instead it increases while the robot moves without collisions, encouraging it to avoid objects).")]),e._v(" "),n("h4",{attrs:{id:"learning-modes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#learning-modes"}},[e._v("#")]),e._v(" Learning modes:")]),e._v(" "),n("p",[e._v("Another important feature of ML systems is that they can learn either in a one-off (batch learning) mode or in a continuous incremental (online learning) mode.")]),e._v(" "),n("p",[e._v("In the case of batch learning (also called offline learning), the system is trained using all available data: it is usually a long and computationally expensive process, so it is performed only occasionally. When you want to re-train the model you have to do it again on all the data, so it's best to do it only if I have a considerable amount of new data, which can actually improve the performance of the new model (which will be trained on new and old ones).")]),e._v(" "),n("p",[e._v("Fortunately, this method of training can be easily automated so you can decide to train the model, for example, every night or every week.")]),e._v(" "),n("p",[e._v("However, if you need a faster system to react to changes (for example for the detection of commercial fraud or symptoms of cyber attack) the best solution is online learning.\nIn this case (also called live learning) the system is trained sequentially by taking small batches of data, called mini-batches, as input. Learning from new data is cheap (in computational terms) and fast as the system learns from on-the-fly data as it is collected.")]),e._v(" "),n("p",[e._v('Online learning is optimal in cases where you need a reactive system response or you have little computational power. Note that the term "online" does not mean that the system must be connected to a geographical network, but simply be fed with a continuous flow of data.')]),e._v(" "),n("h4",{attrs:{id:"type-of-inference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#type-of-inference"}},[e._v("#")]),e._v(" Type of inference:")]),e._v(" "),n("p",[e._v('One last way to categorize the ML systems is by how to be generalized.\nModel-based systems aim to create a representation of knowledge (a model), which is then used to generate outputs. Instance-based systems do not generalize from an unseen input, but compare it with all previous data (saved in memory) and find its "ideal arrangement" among them, i.e. they try to place the data at the correct point. An example can be very useful to understand this difference.')]),e._v(" "),n("p",[n("strong",[e._v("Scenario:")])]),e._v(" "),n("p",[e._v('given a series of coordinates (datum: X, Y) that constitutes our "knowledge" try to, given the X of a new point, understand which Y is the most appropriate.\nA strategy could be to compare the value of X of the point with that of the known points, take the nearest known point in terms of distance, and assign its Y to the new point.')]),e._v(" "),n("p",[n("img",{attrs:{src:a(352),alt:"Figure 1-1"}})]),e._v(" "),n("p",[e._v("However, this approach is very simplistic and is based on the strong assumption that the position of a new point is determined univocally by its closest neighbor.")]),e._v(" "),n("p",[e._v('The system learns its knowledge "by heart" and applies it blindly to new cases, applying some measure of similarity (in this case, the distance relative to the dimension X) concerning those stored.')]),e._v(" "),n("p",[e._v('The other approach that can be used to generalize new cases starting from the old ones, could be to create a "representation" or "idea" of how the data I have been made (the grey dots in figure) and use this "idea" (the model) to produce the Y of the new points.\nA model is, therefore, a set of parameters that, when properly adjusted, can provide a reasonable estimate of Y, given the X of a new point.')]),e._v(" "),n("p",[e._v("In our case, we imagine that our model is the straight line that best approximates the series of gray points. Our parameters are the slope and the intercept of the line, and the training process of the model consists in understanding what the numerical values of these two parameters are.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(353),alt:"Figure 1-1"}})]),e._v(" "),n("p",[e._v('A Machine Learning model, here in its simplest version (two parameters), sometimes consists of tens of thousands or even millions of parameters. To train them, and therefore find the "good values" of the parameters, a lot of computing power is needed and the optimization of the process of training the models is a heartfelt and urgent topic of research.')]),e._v(" "),n("h2",{attrs:{id:"main-challenges-of-machine-learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#main-challenges-of-machine-learning"}},[e._v("#")]),e._v(" Main challenges of Machine Learning")]),e._v(" "),n("h3",{attrs:{id:"insufficient-amount-of-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#insufficient-amount-of-data"}},[e._v("#")]),e._v(" Insufficient amount of data")]),e._v(" "),n("p",[e._v("The key assumption of Machine Learning is that you have the data you need to train models and use them later to solve problems.\nIt may happen that in the real world the data you have is not enough to train a model to accurately recognize patterns that might be interesting for the problem.")]),e._v(" "),n("p",[e._v("Even for simple problems, thousands of examples are needed, and for complex problems such as image recognition or voice recognition, millions of examples may be needed.")]),e._v(" "),n("p",[e._v("Various organizations are moving to create open data platforms to share datasets and allow the development of otherwise unattainable applications.")]),e._v(" "),n("p",[e._v("The issue of labeling (labeling data for supervised learning) is crucial today. Services such as CloudFactory or AWS Mechanical Turk seek to address this need by connecting organizations in need of workforce to label data, and the workforce itself. Services of this type have certain limitations, such as the accuracy of the labeling and the time needed to perform it.")]),e._v(" "),n("h3",{attrs:{id:"low-quality-and-unrepresentative-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#low-quality-and-unrepresentative-data"}},[e._v("#")]),e._v(" Low quality and unrepresentative data")]),e._v(" "),n("p",[e._v("Another very common problem with data on which to train models is their poor quality. Missing, poorly formatted, or even incorrect data can be fatal to a Machine Learning project. Ideally, high-quality data should be produced directly, but projects are often started on existing (and low quality) data.")]),e._v(" "),n("p",[e._v("For this reason, one of the most important (and time-consuming!) steps in developing an ML application is data pre-processing.")]),e._v(" "),n("p",[e._v("Pre-processing the data consists of cleaning it up and preparing it for the Machine Learning model that we will have to train: we remove the individual damaged examples, we adjust the format of the strings and we manage the missing fields (missing values). The pre-processing phase is context-dependent and can take very different forms.")]),e._v(" "),n("p",[e._v("In this phase we usually try to increase the size of the dataset we are using: for example, if we have a dataset of images, we can think of adding a copy of each image to the dataset, but in a version rotated by 90°, or blurred by some kind of noise.")]),e._v(" "),n("p",[e._v("This technique, called "),n("strong",[e._v("data augmentation")]),e._v(', is particularly useful to increase the robustness of our application (because the model is trained to see also damaged/distorted images and recognize them anyway), but generally does not add "new information", which can only be achieved with additional data.')]),e._v(" "),n("p",[e._v("Often you can also run into unrepresentative data: a model, to generalize effectively, must have seen a variety of cases (data) that covers most situations, and that represents reality in a realistic way.")]),e._v(" "),n("p",[e._v("For example, let's consider a dataset of temperatures collected in the various days of the year with the task to predict the temperature of a given day. If we only have the November temperatures, how does the model discover the April temperature pattern? Even worse, if that particular November was particularly hot and therefore not representative, we risk getting a model that makes misleading predictions!")]),e._v(" "),n("p",[e._v("Think about the suggestive fact that a random model (for example the generation of a random number within the range [temp. MIN - temp. MAX]) can easily obtain better performance than a model trained on unrepresentative data!")]),e._v(" "),n("h3",{attrs:{id:"underfitting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#underfitting"}},[e._v("#")]),e._v(" Underfitting")]),e._v(" "),n("p",[e._v("The problem of underfitting occurs when the model we have chosen is too simple (a few parameters) to effectively represent a generalization of the dataset, and therefore fail to capture the patterns that occur in the data.")]),e._v(" "),n("p",[e._v("For example, if we wanted to use a linear model to classify images of dogs and cats, we would probably get unacceptable performances, because the linear model cannot capture the complexity of the data on which we train it.")]),e._v(" "),n("p",[e._v('Usually, a solution to underfitting consists of trying to train more complex models (for example a neural network, which can have even millions of parameters), which can "take into account" all the variables that could have an impact on the choice of the output. For example, in a 64 x 64 pixels image, 4096 possible points can influence the result! A model with few parameters can hardly handle this complexity.')]),e._v(" "),n("h3",{attrs:{id:"overfitting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overfitting"}},[e._v("#")]),e._v(" Overfitting")]),e._v(" "),n("p",[e._v('The concept of overfitting occurs in the opposite case to what has just been explained, i.e. when a model is "too complex" for the assigned task.')]),e._v(" "),n("p",[e._v('For example, to use a complex higher degree curve resulting from a trained model to predict the price of houses would be ineffective because the network would learn so well to represent the dataset that the resulting model would be mere storage of data! A model that suffers from overfitting is not able to generalize well because it can not "detach" from the only representation of the world it knows, or the dataset on which it was trained.')]),e._v(" "),n("h3",{attrs:{id:"underfitting-and-overfitting-tradeoff"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#underfitting-and-overfitting-tradeoff"}},[e._v("#")]),e._v(" Underfitting and overfitting tradeoff")]),e._v(" "),n("p",[e._v("The tradeoff between the complexity of the model (number of parameters that can be modified), the amount of data available, and the difficulty of the task are some of the key concepts behind the choice of the model architecture.\nBelow is a figure that represents three different situations where a model must classify if a point, given in input its two-dimensional coordinates, is red or blue:")]),e._v(" "),n("p",[n("img",{attrs:{src:a(354),alt:"Figure 1-1"}})]),e._v(" "),n("ul",[n("li",[e._v("Underfitting, the model is too simple (for example, a linear model) and fails to grasp the complexity of the dataset")]),e._v(" "),n("li",[e._v('Fitting appropriate, the model grasps the general "idea" of how the data is distracted, which does not try to change too much to represent each point')]),e._v(" "),n("li",[e._v('Overfitting, the model modifies itself heavily to represent every point, but consequently "memorizes" the data of training, struggling, therefore, to generalize later.')])]),e._v(" "),n("p",[e._v('Another important aspect to consider is the "price" of errors in prediction: classify as spam a regular email is very different from wrongly detecting cancer in an image, so the model performance, deriving from this tradeoff, is a key factor.')]),e._v(" "),n("h2",{attrs:{id:"conclusions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),n("p",[e._v("Hopefully, now you should be more comfortable with high-level ideas of how ML systems are classified and you should have a clear idea of what the classification and regression tasks are.")]),e._v(" "),n("p",[e._v("Now you're ready to start your real Data Science Journey in the Purgatorio!")])])}),[],!1,null,null,null);t.default=i.exports}}]);