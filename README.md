# angularjsw3schools


# Introdução 

- AngularJS é uma estrutura JavaScript . Ele pode ser adicionado a uma página HTML com uma tag < script>.

- AngularJS estende atributos HTML com Diretivas e vincula dados a HTML com Expressões .

- Apenas coloque a tag JS para ele comecar a funcionar

<blockquote>

		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

</blockquote>

- ng-directives

- A diretiva ng-app define um aplicativo AngularJS. (define o app)

- A diretiva ng-model vincula o valor dos controles HTML (input, select, textarea) aos dados do aplicativo. (faz a leitura de dados de entrada)

- A diretiva ng-bind vincula os dados do aplicativo à visualização HTML.
(exibe dados, criando uma saida)

<blockquote>

		<!DOCTYPE html>
		<html>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
		<body>

		<div ng-app="">
		  <p>Name: <input type="text" ng-model="name"></p>
		  <p ng-bind="name"></p>
		</div>

		</body>
		</html>

</blockquote>

- Interpolacao/Expressões 

- As expressões AngularJS são escritas entre chaves duplas: {{ expressão }} .

- O AngularJS "exibirá" os dados exatamente onde a expressão está escrita:

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>

	<div ng-app="">
	  <p>My first expression: {{ 5 + 5 }}</p>
	</div>

	</body>
	</html>

</blockquote>

- As expressões AngularJS vinculam dados AngularJS a HTML da mesma maneira que a diretiva ng-bind .

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>

	<div ng-app="">
	  <p>Name: <input type="text" ng-model="name"></p>
	  <p>{{name}}</p>
	</div>

	</body>
	</html>

</blockquote>

- Os módulos AngularJS definem aplicativos AngularJS.

- Os controladores AngularJS controlam os aplicativos AngularJS.

- A diretiva ng-app define o aplicativo, a diretiva ng-controller define o controlador.

<blockquote>

	<div ng-app="myApp" ng-controller="myCtrl">

	First Name: <input type="text" ng-model="firstName"><br>
	Last Name: <input type="text" ng-model="lastName"><br>
	<br>
	Full Name: {{firstName + " " + lastName}}

	</div>

	<script>
	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	  $scope.firstName= "John";
	  $scope.lastName= "Doe";
	});
	</script>

</blockquote>


# Expressões AngularJS

- Expressões AngularJS podem ser escritas dentro de chaves duplas: .{{ expression }}

- Expressões AngularJS também podem ser escritas dentro de uma diretiva: .ng-bind="expression"

- O AngularJS resolverá a expressão e retornará o resultado exatamente onde a expressão foi escrita.

- As expressões AngularJS são muito parecidas com as expressões JavaScript: elas podem conter literais, operadores e variáveis.

Exemplo {{ 5 + 5 }} ou {{ firstName + " " + lastName }}


<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>

	<div ng-app="">
	  <p>My first expression: {{ 5 + 5 }}</p>
	</div>

	<div ng-app="" ng-init="quantity=1;cost=5">

	<p>Total in dollar: <span ng-bind="quantity * cost"></span></p>

	</div>

	<div ng-app="" ng-init="firstName='John';lastName='Doe'">

	<p>The name is {{ firstName + " " + lastName }}</p>

	<div ng-app="" ng-init="person={firstName:'John',lastName:'Doe'}">

	<p>The name is {{ person.lastName }}</p>


	</body>
	</html>

</blockquote>

# Módulos AngularJS

- 











































