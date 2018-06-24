<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
// GENERAL
$route['general/getFacultyBlocks'] = 'spaces/getFacultyBuildings';
$route['general/getBlockFloors'] = 'spaces/getFacultyFloors';
$route['general/getFloorsRooms'] = 'spaces/getFacultyRooms';
$route['general/availableSpaces'] = 'spaces/getFacultyAvailableRooms';
// CONSULTA DE HISTORICO DE ACESSOS
$route['history/user']                  = 'history/getUserAccessHistory';
$route['history/user/(:any)']           = 'history/getUserAccessHistory/$1';
// CONSULTA DE PRESENÇAS NAS AULAS
$route['teacher/classes']               = 'attendance/getTeacherClasses';
$route['teacher/class/dates/(:any)']    = 'attendance/getTeacherClassDates/$1';
$route['teacher/class/students/(:any)'] = 'attendance/getStudentsByClass/$1';
$route['teacher/course/getStudentsAttendance'] = 'attendance/getStudentAttendance_Teacher';
$route['teacher/individual/getStudentsAttendance'] = 'attendance/getIndvStudentAttendance_Teacher';
$route['teacher/individual/changeStudentsAttendance'] = 'attendance/changeUserAttendance';
// CRIAR DISCIPLINA
$route['teacher/createSubject'] = 'classes/createSubject';
// CRIAR AULAS
$route['teacher/createClasses'] = 'classes/createClasses';
// MATRICULAR ALUNOS
$route['teacher/matriculateStudent'] = 'classes/matriculateStudent';
// CONSULTA DE QUEM ESTA NUM ESPAÇO
$route['spaces/getPeopleNumerInSpace'] = 'spaces/getPeopleNumInFacultyRooms';
//CRIAR ACESSOS
$route['testcase/createAcess'] = 'testcaseaccess/CreateAcess';
// UTILIZADOR
$route['user/login']                    = 'UserLoader/logIn'; // [20] registers user if not already registered | {token => String, user_type => String}
$route['user/logout']                   = 'UserLoader/logOut'; // [20] logs user out
$route['user/retriveprofile']           = 'UserLoader/getUserProfile'; // [20, 30, 10]
$route['user/changeType']               = 'UserLoader/updateUserType'; //[10]
// ROTAS GERAIS
$route['default_controller']            = 'NotAuthorized';
$route['404_override']                  = '';
