var GameApp = angular.module('GameApp', ['ngCookies']);

GameApp.controller('MainController', function ($scope, $interval, $cookieStore, $filter) {

	$scope.Estatico = [
		{ 
			Id: 1, Nombre: "Gial Ackbar", Imagen: "admiral-ackbar.png",
			Descripcion: "Gial Ackbar fue un veterano soldado Mon calamari y un líder revolucionario durante las Guerras Clon, la Guerra Civil Galáctica, y el conflicto entre la Resistencia y la Primera Orden"
		}, {
			Id: 2, Nombre: "Moradores de las arenas", Imagen: "tusken-raider.png",
			Descripcion: "Los moradores de las arenas o bandidos tusken son una raza ficticia de la serie de películas de la Guerra de las Galaxias"
		}, {
			Id: 3, Nombre: "Jawa", Imagen: "jawa.png",
			Descripcion: "Los jawas son una especie nativa del planeta Tatooine, aunque también se los encuentra en planetas donde puedan encontrar chatarra para vender"
		}, { 
			Id: 4, Nombre: "Greedo", Imagen: "greedo.png",
			Descripcion: "Un cazarrecompensas de la especie Rodian, que servía a Jabba el Hutt"
		}, {
			Id: 5, Nombre: "Jabba", Imagen: "jabba-the-hutt.png",
			Descripcion: "Jabba the Hutt (en inglés) es un personaje ficticio de la serie La Guerra de las Galaxias, apareció por primera vez en la película Star Wars Episode VI - Return of the Jedi (1983) como un alienígena grande y con forma de babosa"
		}, {  
			Id: 6, Nombre: "Ewok", Imagen: "ewok.png",
			Descripcion: "Los Ewoks son unos sensitivos y peludos bípedos nativos de la luna de Endor. Son individuos curiosos de aproximadamente un metro de estatura"
		}, {  
			Id: 7, Nombre: "Lobot", Imagen: "lobot.png",
			Descripcion: "Lobot es un ciborg y ayudante de Lando Calrissian en la administración de Ciudad Nube"
		}, {  
			Id: 8, Nombre: "Lando Calrissian", Imagen: "lando-calrissian.png",
			Descripcion: "Lando Calrissian era un Humano, Contrabandista, apostador y un jugador de cartas que se convirtió en Barón Administrador de Ciudad Nube y, más tarde, un General en la Alianza para Restaurar la República"
		}, {  
			Id: 9, Nombre: "Stormtrooper", Imagen: "stormtrooper.png",
			Descripcion: "En el universo ficticio de Star Wars, los Stormtroopers o Tropas de Asalto son las tropas de asalto del Imperio Galáctico"
		}, { 
			Id: 10, Nombre: "Clone Trooper", Imagen: "clone-trooper.png",
			Descripcion: "Los Clone Troopers o Soldados Clones del Gran Ejército de la República son los soldados, en el universo ficticio de Star Wars, clonados a partir de Jango Fett, un cazarrecompensas con armadura Mandaloriana"
		}, { 
			Id: 11, Nombre: "Boba Fett", Imagen: "boba-fett.png",
			Descripcion: "Boba Fett fue un cazarrecompensas humano, y el clon del infame cazarrecompensas Jango Fett"
		}, { 
			Id: 12, Nombre: "Jango Fett", Imagen: "jango-fett.png",
			Descripcion: "Jango Fett era un cazarrecompensas humano masculino, ampliamente considerado como el mejor en la galaxia en los años anteriores a las Guerras Clon"
		}, { 
			Id: 13, Nombre: "C3PO", Imagen: "c3po.png",
			Descripcion: "Se trata de un androide de protocolo, diseñado para el servicio de los humanos para llevar a cabo dichas tareas, para lo que domina seis millones de formas de comunicación"
		}, { 
			Id: 14, Nombre: "R2D2", Imagen: "r2d2.png",
			Descripcion: "Era un droide inteligente y valiente que sirvio a una multitud de maestros a lo largo de su vida, y nunca recibió un borrado de memoria completo ni ha recibido programación nueva"
		}, { 
			Id: 15, Nombre: "Red Five", Imagen: "red-five.png",
			Descripcion: "Rojo Cinco fue la señal de identificación que usó Luke Skywalker durante su época como miembro de la Alianza Rebelde"
		}, { 
			Id: 16, Nombre: "Chewbacca", Imagen: "chewbacca.png",
			Descripcion: "Fue un guerrero wookiee, un contrabandista y un luchador de resistencia que peleó en las Guerras Clon, la Guerra Civil Galáctica y el Conflicto Primera Orden-Resistencia"
		}, { 
			Id: 17, Nombre: "Han Solo", Imagen: "han-solo.png",
			Descripcion: "Han Solo era un contrabandista humano masculino que se convirtió en un líder en la Alianza para Restaurar la República y una figura clave en la derrota del Imperio Galáctico durante la Guerra Civil Galáctica"
		}, { 
			Id: 18, Nombre: "Qui Gon Jinn", Imagen: "qui-gon-jinn.png",
			Descripcion: "Qui-Gon Jinn era un Maestro Jedi humano nacido en Coruscant durante los días de declinación de la República Galáctica"
		}, { 
			Id: 19, Nombre: "Obi-Wan Kenobi", Imagen: "obiwan.png",
			Descripcion: "Obi-Wan Kenobi, más tarde conocido como Ben Kenobi durante su exilio, fue un humano Maestro Jedi sensible a la Fuerza que sirvió a la República Galáctica"
		}, { 
			Id: 20, Nombre: "Luke Skywalker", Imagen: "luke.png",
			Descripcion: "Luke Skywalker fue un humano sensible a la Fuerza y posteriormente un Maestro Jedi que fue instrumental en la derrota del Imperio Galáctico y de los Sith durante la Guerra Civil Galáctica"
		}, { 
			Id: 21, Nombre: "Princesa Leia", Imagen: "leia.png",
			Descripcion: "Hija del General Jedi Anakin Skywalker y la senadora Padmé Amidala de Naboo, Leia fue la hermana melliza de Luke Skywalker, y poco después de su nacimiento se convirtió en la hija adoptiva de Bail Prestor Organa y la reina Breha Antilles Organa de Alderaan"
		}, { 
			Id: 22, Nombre: "Yoda", Imagen: "yoda.png",
			Descripcion: "Yoda un miembro masculino de una especie misteriosa, era un reverenciado Maestro Jedi que sirvió como Gran Maestro de la Orden Jedi en los últimos días de la República Galáctica"
		}, { 
			Id: 23, Nombre: "Emperador Palpatine", Imagen: "emperador-palpatine.png",
			Descripcion: "Sheev Palpatine, también conocido como Darth Sidious, fue un humano sensible a la Fuerza que sirvió como el último Canciller de la República Galáctica y el primer Emperador del Imperio Galáctico"
		}, { 
			Id: 24, Nombre: "Darth Maul", Imagen: "darth-maul.png",
			Descripcion: "Darth Maul fue un zabrak dathomiriano y Lord Sith que vivió durante los últimos años de la República Galáctica y en los años previos a la Guerra Civil Galáctica"
		}, { 
			Id: 25, Nombre: "Darth Maul", Imagen: "darth-vader.png",
			Descripcion: "Darth Vader, también conocido por su nombre de nacimiento Anakin Skywalker, aparece en la trilogía original como un antagonista cuyas acciones dirigen la trama"
		}
	];
	
	$scope.IniciaCatalogo = function (cargar) {
		$scope.Catalogo = {
			ListaObjetos: [
				{ Id: 1, Nivel: 0, CosteBase: 100, SubidaCosteNivel: 50, ProduccionBase: 1, Potenciador: 1, Potenciadores: [] }, 
				{ Id: 2, Nivel: 0, CosteBase: 1000, SubidaCosteNivel: 1000, ProduccionBase: 10, Potenciador: 1, Potenciadores: [] }, 
				{ Id: 3, Nivel: 0, CosteBase: 5000, SubidaCosteNivel: 5000, ProduccionBase: 50, Potenciador: 1, Potenciadores: [] }, 
				{ Id: 4, Nivel: 0, CosteBase: 20000, SubidaCosteNivel: 20000, ProduccionBase: 200, Potenciador: 1, Potenciadores: [] },
				{ Id: 5, Nivel: 0, CosteBase: 100000, SubidaCosteNivel: 100000, ProduccionBase: 1000, Potenciador: 1, Potenciadores: [] },
				{ Id: 6, Nivel: 0, CosteBase: 500000, SubidaCosteNivel: 500000, ProduccionBase: 5000, Potenciador: 1, Potenciadores: [] },
				{ Id: 7, Nivel: 0, CosteBase: 2000000, SubidaCosteNivel: 2000000, ProduccionBase: 20000, Potenciador: 1, Potenciadores: [] },
				{ Id: 8, Nivel: 0, CosteBase: 10000000, SubidaCosteNivel: 10000000, ProduccionBase: 100000, Potenciador: 1, Potenciadores: [] },
				{ Id: 9, Nivel: 0, CosteBase: 50000000, SubidaCosteNivel: 50000000, ProduccionBase: 500000, Potenciador: 1, Potenciadores: [] },
				{ Id: 10, Nivel: 0, CosteBase: 200000000, SubidaCosteNivel: 200000000, ProduccionBase: 2000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 11, Nivel: 0, CosteBase: 1000000000, SubidaCosteNivel: 1000000000, ProduccionBase: 10000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 12, Nivel: 0, CosteBase: 5000000000, SubidaCosteNivel: 5000000000, ProduccionBase: 50000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 13, Nivel: 0, CosteBase: 20000000000, SubidaCosteNivel: 20000000000, ProduccionBase: 200000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 14, Nivel: 0, CosteBase: 100000000000, SubidaCosteNivel: 100000000000, ProduccionBase: 1000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 15, Nivel: 0, CosteBase: 500000000000, SubidaCosteNivel: 500000000000, ProduccionBase: 5000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 16, Nivel: 0, CosteBase: 2000000000000, SubidaCosteNivel: 2000000000000, ProduccionBase: 20000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 17, Nivel: 0, CosteBase: 10000000000000, SubidaCosteNivel: 10000000000000, ProduccionBase: 100000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 18, Nivel: 0, CosteBase: 50000000000000, SubidaCosteNivel: 50000000000000, ProduccionBase: 500000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 19, Nivel: 0, CosteBase: 200000000000000, SubidaCosteNivel: 200000000000000, ProduccionBase: 2000000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 20, Nivel: 0, CosteBase: 1000000000000000, SubidaCosteNivel: 1000000000000000, ProduccionBase: 10000000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 21, Nivel: 0, CosteBase: 5000000000000000, SubidaCosteNivel: 5000000000000000, ProduccionBase: 50000000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 22, Nivel: 0, CosteBase: 20000000000000000, SubidaCosteNivel: 20000000000000000, ProduccionBase: 200000000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 23, Nivel: 0, CosteBase: 100000000000000000, SubidaCosteNivel: 100000000000000000, ProduccionBase: 1000000000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 24, Nivel: 0, CosteBase: 500000000000000000, SubidaCosteNivel: 500000000000000000, ProduccionBase: 5000000000000000, Potenciador: 1, Potenciadores: [] },
				{ Id: 25, Nivel: 0, CosteBase: 2000000000000000000, SubidaCosteNivel: 2000000000000000000, ProduccionBase: 20000000000000000, Potenciador: 1, Potenciadores: [] },
			],
			GananciaActual: 1000, PotenciadorActual: 1
		};
		
		if (cargar)
			$scope.CargaCatalogo();
	};
	
	$scope.CargaCatalogo = function () {
		//if($cookieStore.get('version')==1) {
		//	$scope.Catalogo = $cookieStore.get('gamedata');
		//};
		if(localStorage.getItem('version')==1) {
			$scope.Catalogo = JSON.parse(localStorage.getItem('gamedata'));
		};
	};
	
	$scope.ReiniciaCatalogo = function () {
		var potenciar = 0;
		for (var i = 0; i < $scope.Catalogo.ListaObjetos.length; i++) {
			potenciar += $scope.Catalogo.ListaObjetos[i].Nivel;
		};
		$scope.IniciaCatalogo(false);
		$scope.Catalogo.PotenciadorActual += Math.floor(potenciar/500);
	};
	
	$scope.IniciaCatalogo(true);

	$scope.SubirNivel = function (item) {
		if ((item.CosteBase + item.SubidaCosteNivel * item.Nivel) <= $scope.Catalogo.GananciaActual) {
			$scope.Catalogo.GananciaActual -= (item.CosteBase + item.SubidaCosteNivel * item.Nivel);
			item.Nivel++;
			$scope.CargaPotenciadores(item);
		}
	};
	
	$scope.VisibilidadObjeto = function(item) {
		if (item.Id == 1) {
			return true;
		} else if (item.Id == 2) {
			return $filter('filter')($scope.Catalogo.ListaObjetos, {Id:1})[0].Nivel >= 10;
		} else if (item.Id == 3) {
			return $filter('filter')($scope.Catalogo.ListaObjetos, {Id:2})[0].Nivel >= 10 
					&& $filter('filter')($scope.Catalogo.ListaObjetos, {Id:1})[0].Nivel >= 20;
		} else {
			return $filter('filter')($scope.Catalogo.ListaObjetos, {Id:(item.Id-1)})[0].Nivel >= 10 
					&& $filter('filter')($scope.Catalogo.ListaObjetos, {Id:(item.Id-2)})[0].Nivel >= 20
					&& $filter('filter')($scope.Catalogo.ListaObjetos, {Id:(item.Id-3)})[0].Nivel >= 50;
		}
	};
	
	$scope.CargaPotenciadores = function(item){
		if (item.Nivel == 10 || item.Nivel == 50 || item.Nivel == 150 || item.Nivel == 500) {
			item.Potenciadores.push({ Nivel: item.Nivel, Potenciador: 2 , Activo: false });
			Materialize.toast('NUEVO POTENCIADOR', 4000);
		}
	};
	
	$scope.ActivarPotenciador = function (item, potenciador) {
		potenciador.Activo = true;
		item.Potenciador = item.Potenciador * potenciador.Potenciador;
	};
	
	$scope.GananciaActualTimer = $interval(function () {
		var ganancia = 0;
		for (var i = 0; i < $scope.Catalogo.ListaObjetos.length; i++) {
			ganancia += $scope.Catalogo.ListaObjetos[i].ProduccionBase * $scope.Catalogo.ListaObjetos[i].Nivel * $scope.Catalogo.ListaObjetos[i].Potenciador;
		}
		ganancia = ganancia * $scope.Catalogo.PotenciadorActual;
		$scope.Catalogo.GananciaActual += ganancia;
	}, 1000, 0);
	
	$scope.GuardarAutoTimer = $interval(function () {
		//$cookieStore.put('version', 1);
		//$cookieStore.put('gamedata', $scope.Catalogo);
		localStorage.setItem('version', 1);
		localStorage.setItem('gamedata', JSON.stringify($scope.Catalogo));
	}, 1000, 0);
	
	$scope.$on('$destroy', function () {
		if (angular.isDefined($scope.GananciaActualTimer)) { $interval.cancel($scope.GananciaActualTimer); $scope.GananciaActualTimer = null; }
		if (angular.isDefined($scope.GuardarAutoTimer)) { $interval.cancel($scope.GuardarAutoTimer); $scope.GuardarAutoTimer = null; }
	});
	
	$("#side-nav-activator").sideNav({
		menuWidth: 300,
		edge: 'right',
		closeOnClick: false
    });

});