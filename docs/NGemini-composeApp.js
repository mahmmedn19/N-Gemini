(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-runtime.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-client-core.js', './ktor-ktor-http.js', './kotlinx-serialization-kotlinx-serialization-json.js', './ktor-ktor-utils.js', './core-koin-core.js', './ktor-ktor-client-content-negotiation.js', './ktor-ktor-client-logging.js', './ktor-ktor-serialization-kotlinx-json.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-material.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-material-icons-core.js', './compose-multiplatform-core-material-icons-extended.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-animation.js', './components-library.js', './moko-mvvm-mvvm-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./ktor-ktor-utils.js'), require('./core-koin-core.js'), require('./ktor-ktor-client-content-negotiation.js'), require('./ktor-ktor-client-logging.js'), require('./ktor-ktor-serialization-kotlinx-json.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-material.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-material-icons-core.js'), require('./compose-multiplatform-core-material-icons-extended.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-animation.js'), require('./components-library.js'), require('./moko-mvvm-mvvm-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['core-koin-core'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'core-koin-core' was not found. Please, check whether 'core-koin-core' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'ktor-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-content-negotiation' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['ktor-ktor-client-logging'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'ktor-ktor-client-logging' was not found. Please, check whether 'ktor-ktor-client-logging' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'ktor-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-material'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-material' was not found. Please, check whether 'compose-multiplatform-core-material' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-material-icons-core'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-material-icons-core' was not found. Please, check whether 'compose-multiplatform-core-material-icons-core' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-material-icons-extended'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-material-icons-extended' was not found. Please, check whether 'compose-multiplatform-core-material-icons-extended' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['compose-multiplatform-core-animation'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'compose-multiplatform-core-animation' was not found. Please, check whether 'compose-multiplatform-core-animation' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['components-library'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'components-library' was not found. Please, check whether 'components-library' is loaded prior to 'NGemini:composeApp'.");
    }
    if (typeof this['moko-mvvm-mvvm-core'] === 'undefined') {
      throw new Error("Error loading module 'NGemini:composeApp'. Its dependency 'moko-mvvm-mvvm-core' was not found. Please, check whether 'moko-mvvm-mvvm-core' is loaded prior to 'NGemini:composeApp'.");
    }
    root['NGemini:composeApp'] = factory(typeof this['NGemini:composeApp'] === 'undefined' ? {} : this['NGemini:composeApp'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-runtime'], this['kotlinx-serialization-kotlinx-serialization-core'], this['ktor-ktor-client-core'], this['ktor-ktor-http'], this['kotlinx-serialization-kotlinx-serialization-json'], this['ktor-ktor-utils'], this['core-koin-core'], this['ktor-ktor-client-content-negotiation'], this['ktor-ktor-client-logging'], this['ktor-ktor-serialization-kotlinx-json'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-material'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-material-icons-core'], this['compose-multiplatform-core-material-icons-extended'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-animation'], this['components-library'], this['moko-mvvm-mvvm-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_utils, kotlin_io_insert_koin_koin_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_logging, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_material_material, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_material_material_icons_core, kotlin_org_jetbrains_compose_material_material_icons_extended, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation, kotlin_components_resources_library, kotlin_dev_icerock_moko_mvvm_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.rc;
  var objectMeta = kotlin_kotlin.$_$.qc;
  var setMetadataFor = kotlin_kotlin.$_$.sc;
  var Unit_instance = kotlin_kotlin.$_$.j5;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l;
  var emptyList = kotlin_kotlin.$_$.g7;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.lh;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var VOID = kotlin_kotlin.$_$.f;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var objectCreate = kotlin_kotlin.$_$.pc;
  var hashCode = kotlin_kotlin.$_$.tb;
  var equals = kotlin_kotlin.$_$.jb;
  var classMeta = kotlin_kotlin.$_$.fb;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var getStringHashCode = kotlin_kotlin.$_$.sb;
  var interfaceMeta = kotlin_kotlin.$_$.vb;
  var CoroutineImpl = kotlin_kotlin.$_$.ra;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.k;
  var url = kotlin_io_ktor_ktor_client_core.$_$.n;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var header = kotlin_io_ktor_ktor_client_core.$_$.m;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.d;
  var arrayOf = kotlin_kotlin.$_$.zh;
  var createKType = kotlin_kotlin.$_$.a;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var isInterface = kotlin_kotlin.$_$.ec;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.q;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.da;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var println = kotlin_kotlin.$_$.va;
  var Exception = kotlin_kotlin.$_$.bh;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var encodeBase64 = kotlin_io_ktor_ktor_utils.$_$.v;
  var listOf = kotlin_kotlin.$_$.p8;
  var Companion_getInstance_0 = kotlin_io_insert_koin_koin_core.$_$.b;
  var Kind_Singleton_getInstance = kotlin_io_insert_koin_koin_core.$_$.a;
  var BeanDefinition = kotlin_io_insert_koin_koin_core.$_$.e;
  var SingleInstanceFactory = kotlin_io_insert_koin_koin_core.$_$.g;
  var KoinDefinition = kotlin_io_insert_koin_koin_core.$_$.f;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.s;
  var module_0 = kotlin_io_insert_koin_koin_core.$_$.h;
  var HttpClient_0 = kotlin_io_ktor_ktor_client_core.$_$.r;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var Plugin_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.c;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_client_logging.$_$.c;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var Long = kotlin_kotlin.$_$.eh;
  var Companion_instance = kotlin_io_ktor_ktor_client_logging.$_$.b;
  var get_DEFAULT = kotlin_io_ktor_ktor_client_logging.$_$.d;
  var LogLevel_ALL_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.a;
  var ByteArraySerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var Enum = kotlin_kotlin.$_$.zg;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.l;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var Text$composable = kotlin_org_jetbrains_compose_material_material.$_$.d;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.x8;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i2;
  var LocalSoftwareKeyboardController_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.t8;
  var get_LocalFocusManager = kotlin_org_jetbrains_compose_ui_ui.$_$.j5;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.w8;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui.$_$.r8;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f2;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a1;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.z;
  var columnMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b1;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n1;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k2;
  var KeyboardActions = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s1;
  var TextFieldDefaults_getInstance = kotlin_org_jetbrains_compose_material_material.$_$.f;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.w3;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var OutlinedTextField$composable = kotlin_org_jetbrains_compose_material_material.$_$.c;
  var KMutableProperty0 = kotlin_kotlin.$_$.ae;
  var THROW_ISE = kotlin_kotlin.$_$.mh;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ob;
  var charSequenceLength = kotlin_kotlin.$_$.db;
  var size = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.u;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i1;
  var Icons_getInstance = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.c;
  var get_Attachment = kotlin_org_jetbrains_compose_material_material_icons_extended.$_$.a;
  var Icon$composable = kotlin_org_jetbrains_compose_material_material.$_$.a;
  var get_Send = kotlin_org_jetbrains_compose_material_material_icons_core.$_$.a;
  var rememberLazyListState$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var LazyColumn$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var get_lastIndex = kotlin_kotlin.$_$.h8;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.q;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g1;
  var padding_0 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.o;
  var isCharSequence = kotlin_kotlin.$_$.ac;
  var trim = kotlin_kotlin.$_$.pg;
  var toString = kotlin_kotlin.$_$.wc;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w1;
  var Text$composable_0 = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var _StrokeCap___init__impl__kfgr27 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var CircularProgressIndicator$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var fadeIn = kotlin_org_jetbrains_compose_animation_animation.$_$.e;
  var fadeOut = kotlin_org_jetbrains_compose_animation_animation.$_$.f;
  var AnimatedVisibility$composable = kotlin_org_jetbrains_compose_animation_animation.$_$.b;
  var wrapContentSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.x;
  var LazyRow$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var BorderStroke = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h1;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.q8;
  var _FilterQuality___init__impl__nv51aq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var Image$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e1;
  var TopAppBarDefaults_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.m;
  var TopAppBar$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.h;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j2;
  var painterResource$composable = kotlin_components_resources_library.$_$.a;
  var Image$composable_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d1;
  var KoinPlatform_instance = kotlin_io_insert_koin_koin_core.$_$.c;
  var collectAsState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _FabPosition___init__impl__9ib2hj = kotlin_org_jetbrains_compose_material3_material3.$_$.k;
  var Scaffold$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var KProperty0 = kotlin_kotlin.$_$.ce;
  var navigationBarsPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var AnimatedVisibility$composable_0 = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var padding_1 = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.p;
  var getBooleanHashCode = kotlin_kotlin.$_$.nb;
  var toMutableList = kotlin_kotlin.$_$.t9;
  var last = kotlin_kotlin.$_$.m8;
  var plus = kotlin_kotlin.$_$.y8;
  var toString_0 = kotlin_kotlin.$_$.yi;
  var ViewModel = kotlin_dev_icerock_moko_mvvm_core.$_$.a;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var isSystemInDarkTheme$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j1;
  var get_LocalContentAlpha = kotlin_org_jetbrains_compose_material_material.$_$.b;
  var ContentAlpha_instance = kotlin_org_jetbrains_compose_material_material.$_$.e;
  var get_LocalContentColor = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var Surface$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var MaterialTheme$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.j;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.i;
  var Shapes = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var startKoin = kotlin_io_insert_koin_koin_core.$_$.d;
  var CanvasBasedWindow$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.f7;
  var asList = kotlin_kotlin.$_$.dj;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BuildKonfig, 'BuildKonfig', objectMeta);
  setMetadataFor(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NGeminiResponseDto, 'NGeminiResponseDto', classMeta, VOID, VOID, NGeminiResponseDto, VOID, {0: $serializer_getInstance});
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer_0, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(CandidateDto, 'CandidateDto', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor($serializer_1, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ContentDto, 'ContentDto', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  setMetadataFor($serializer_2, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PartDto, 'PartDto', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor($serializer_3, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(PromptFeedbackDto, 'PromptFeedbackDto', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  setMetadataFor($serializer_4, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(SafetyRatingDto, 'SafetyRatingDto', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  setMetadataFor(NGeminiService, 'NGeminiService', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor($generateContentCOROUTINE$0, '$generateContentCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($generateContentWithImageCOROUTINE$1, '$generateContentWithImageCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(NGeminiServiceImp, 'NGeminiServiceImp', classMeta, VOID, [NGeminiService], VOID, VOID, VOID, [1, 2]);
  setMetadataFor(Constant, 'Constant', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor($serializer_5, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ContentItem, 'ContentItem', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor($serializer_6, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RequestBody, 'RequestBody', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor($serializer_7, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RequestPart, 'RequestPart', classMeta, VOID, VOID, RequestPart, VOID, {0: $serializer_getInstance_7});
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor($serializer_8, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(RequestInlineData, 'RequestInlineData', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  setMetadataFor(RequestBuilder, 'RequestBuilder', classMeta, VOID, VOID, RequestBuilder);
  setMetadataFor($generateContentCOROUTINE$2, '$generateContentCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($generateContentWithImageCOROUTINE$3, '$generateContentWithImageCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(NGeminiRepository, 'NGeminiRepository', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(NGeminiRepositoryImp, 'NGeminiRepositoryImp', classMeta, VOID, [NGeminiRepository], VOID, VOID, VOID, [1, 2]);
  setMetadataFor(networkModule$1$1$1$3$1, VOID, classMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor($serializer_9, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(ChatMessage, 'ChatMessage', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  setMetadataFor(Role, 'Role', classMeta, Enum);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor($serializer_10, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  setMetadataFor($serializer_11, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_10, 'Companion', objectMeta);
  setMetadataFor($serializer_12, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_11, 'Companion', objectMeta);
  setMetadataFor($serializer_13, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Companion_12, 'Companion', objectMeta);
  setMetadataFor($serializer_14, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(Candidate, 'Candidate', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  setMetadataFor(Content, 'Content', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  setMetadataFor(Part, 'Part', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  setMetadataFor(PromptFeedback, 'PromptFeedback', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  setMetadataFor(SafetyRating, 'SafetyRating', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  setMetadataFor(Companion_13, 'Companion', objectMeta);
  setMetadataFor($serializer_15, '$serializer', objectMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NGemini, 'NGemini', classMeta, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  setMetadataFor(IGetContentUseCase, 'IGetContentUseCase', interfaceMeta, VOID, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor($getContentWithImageCOROUTINE$4, '$getContentWithImageCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(GetContentUseCase, 'GetContentUseCase', classMeta, VOID, [IGetContentUseCase], VOID, VOID, VOID, [2]);
  setMetadataFor(ComposableSingletons$BottomFieldsKt, 'ComposableSingletons$BottomFieldsKt', objectMeta);
  setMetadataFor(ChatMessageItem$composable$slambda, 'ChatMessageItem$composable$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ComposableSingletons$LoadingIconKt, 'ComposableSingletons$LoadingIconKt', objectMeta);
  setMetadataFor(ComposableSingletons$ChatScreenKt, 'ComposableSingletons$ChatScreenKt', objectMeta);
  setMetadataFor(ChatUiState, 'ChatUiState', classMeta, VOID, VOID, ChatUiState);
  setMetadataFor(ChatViewModel$generateContentWithText$slambda, 'ChatViewModel$generateContentWithText$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(ChatViewModel, 'ChatViewModel', classMeta, ViewModel);
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(PlatformContext, 'PlatformContext', classMeta, VOID, VOID, PlatformContext);
  setMetadataFor(ImagePicker, 'ImagePicker', classMeta, VOID, VOID, ImagePicker);
  setMetadataFor(ImagePickerFactory, 'ImagePickerFactory', classMeta);
  //endregion
  function BuildKonfig() {
    this.rgt_1 = 'AIzaSyAQ3IxPChrrr4m6dtEkrV60nAJlvb_6Uz4';
    this.sgt_1 = 0;
  }
  var BuildKonfig_instance;
  function BuildKonfig_getInstance() {
    return BuildKonfig_instance;
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(2115828123, $changed, -1, 'ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:7)');
      }
      ChatScreen$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    return Unit_instance;
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.tgt_1 = ComposableLambda$invoke$ref(composableLambdaInstance(2115828123, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
  }
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(1949839329);
    if (!($changed === 0) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(1949839329, $changed, -1, 'App$composable (App.kt:5)');
      }
      AppTheme$composable(ComposableSingletons$AppKt_getInstance().tgt_1, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(App$composable$lambda($changed));
    }
  }
  function App$composable$lambda($$changed) {
    return function ($composer, $force) {
      App$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function toNGemini(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.ugt_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'data.mapper.toNGemini.<anonymous>' call
        var tmp$ret$0 = toCandidate(item);
        destination.a1(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    var tmp2_safe_receiver = _this__u8e3s4.vgt_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toPromptFeedback(tmp2_safe_receiver);
    return new NGemini(tmp_0, tmp3_elvis_lhs == null ? new PromptFeedback(emptyList()) : tmp3_elvis_lhs);
  }
  function toCandidate(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.xgt_1;
    var tmp = tmp0_safe_receiver == null ? null : toContent(tmp0_safe_receiver);
    var tmp1_elvis_lhs = _this__u8e3s4.zgt_1;
    var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = _this__u8e3s4.agu_1;
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_safe_receiver, 10));
      var tmp0_iterator = tmp2_safe_receiver.o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'data.mapper.toCandidate.<anonymous>' call
        var tmp$ret$0 = toSafetyRating(item);
        destination.a1(tmp$ret$0);
      }
      tmp_1 = destination;
    }
    var tmp3_elvis_lhs = tmp_1;
    return new Candidate(tmp, _this__u8e3s4.ygt_1, tmp_0, tmp3_elvis_lhs == null ? emptyList() : tmp3_elvis_lhs);
  }
  function toContent(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.cgu_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'data.mapper.toContent.<anonymous>' call
        var tmp$ret$0 = toPart(item);
        destination.a1(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = _this__u8e3s4.dgu_1;
    var tmp$ret$3 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return new Content(tmp_0, tmp$ret$3);
  }
  function toPart(_this__u8e3s4) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = _this__u8e3s4.fgu_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return new Part(tmp$ret$0);
  }
  function toPromptFeedback(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.hgu_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
      var tmp0_iterator = tmp0_safe_receiver.o();
      while (tmp0_iterator.d1()) {
        var item = tmp0_iterator.f1();
        // Inline function 'data.mapper.toPromptFeedback.<anonymous>' call
        var tmp$ret$0 = toSafetyRating(item);
        destination.a1(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp1_elvis_lhs = tmp;
    return new PromptFeedback(tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs);
  }
  function toSafetyRating(_this__u8e3s4) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = _this__u8e3s4.jgu_1;
    var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs_0 = _this__u8e3s4.kgu_1;
    var tmp$ret$1 = tmp0_elvis_lhs_0 == null ? '' : tmp0_elvis_lhs_0;
    return new SafetyRating(tmp, tmp$ret$1);
  }
  function Companion() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mgu_1 = [new ArrayListSerializer($serializer_getInstance_0()), null];
  }
  var Companion_instance_1;
  function Companion_getInstance_10() {
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    this.ogu_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.models.NGeminiResponseDto', this, 2);
    tmp0_serialDesc.s9j('candidates', true);
    tmp0_serialDesc.s9j('promptFeedback', true);
    this.ngu_1 = tmp0_serialDesc;
  }
  protoOf($serializer).o99 = function () {
    return this.ngu_1;
  };
  protoOf($serializer).u9j = function () {
    var tmp0_cached = Companion_getInstance_10().mgu_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable($serializer_getInstance_3())];
  };
  protoOf($serializer).q99 = function (decoder) {
    var tmp0_desc = this.ngu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    var tmp8_cached = Companion_getInstance_10().mgu_1;
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, $serializer_getInstance_3(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return NGeminiResponseDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).pgu = function (encoder, value) {
    var tmp0_desc = this.ngu_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_10().mgu_1;
    if (tmp1_output.l9e(tmp0_desc, 0) ? true : !(value.ugt_1 == null)) {
      tmp1_output.h9e(tmp0_desc, 0, tmp2_cached[0], value.ugt_1);
    }
    if (tmp1_output.l9e(tmp0_desc, 1) ? true : !(value.vgt_1 == null)) {
      tmp1_output.h9e(tmp0_desc, 1, $serializer_getInstance_3(), value.vgt_1);
    }
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer).p99 = function (encoder, value) {
    return this.pgu(encoder, value instanceof NGeminiResponseDto ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function NGeminiResponseDto_init_$Init$(seen1, candidates, promptFeedback, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance().ngu_1);
    }
    if (0 === (seen1 & 1))
      $this.ugt_1 = null;
    else
      $this.ugt_1 = candidates;
    if (0 === (seen1 & 2))
      $this.vgt_1 = null;
    else
      $this.vgt_1 = promptFeedback;
    $this.wgt_1 = 0;
    return $this;
  }
  function NGeminiResponseDto_init_$Create$(seen1, candidates, promptFeedback, serializationConstructorMarker) {
    return NGeminiResponseDto_init_$Init$(seen1, candidates, promptFeedback, serializationConstructorMarker, objectCreate(protoOf(NGeminiResponseDto)));
  }
  function NGeminiResponseDto(candidates, promptFeedback) {
    Companion_getInstance_10();
    candidates = candidates === VOID ? null : candidates;
    promptFeedback = promptFeedback === VOID ? null : promptFeedback;
    this.ugt_1 = candidates;
    this.vgt_1 = promptFeedback;
    this.wgt_1 = 0;
  }
  protoOf(NGeminiResponseDto).toString = function () {
    return 'NGeminiResponseDto(candidates=' + this.ugt_1 + ', promptFeedback=' + this.vgt_1 + ')';
  };
  protoOf(NGeminiResponseDto).hashCode = function () {
    var result = this.ugt_1 == null ? 0 : hashCode(this.ugt_1);
    result = imul(result, 31) + (this.vgt_1 == null ? 0 : this.vgt_1.hashCode()) | 0;
    return result;
  };
  protoOf(NGeminiResponseDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NGeminiResponseDto))
      return false;
    var tmp0_other_with_cast = other instanceof NGeminiResponseDto ? other : THROW_CCE();
    if (!equals(this.ugt_1, tmp0_other_with_cast.ugt_1))
      return false;
    if (!equals(this.vgt_1, tmp0_other_with_cast.vgt_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qgu_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_4())];
  }
  var Companion_instance_2;
  function Companion_getInstance_11() {
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    this.sgu_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.models.CandidateDto', this, 4);
    tmp0_serialDesc.s9j('content', false);
    tmp0_serialDesc.s9j('finishReason', false);
    tmp0_serialDesc.s9j('index', false);
    tmp0_serialDesc.s9j('safetyRatings', false);
    this.rgu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).o99 = function () {
    return this.rgu_1;
  };
  protoOf($serializer_0).u9j = function () {
    var tmp0_cached = Companion_getInstance_11().qgu_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_1()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[3])];
  };
  protoOf($serializer_0).q99 = function (decoder) {
    var tmp0_desc = this.rgu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp9_input = decoder.q9c(tmp0_desc);
    var tmp10_cached = Companion_getInstance_11().qgu_1;
    if (tmp9_input.f9d()) {
      tmp4_local0 = tmp9_input.e9d(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.e9d(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.e9d(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.e9d(tmp0_desc, 0, $serializer_getInstance_1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.e9d(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.e9d(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.r9c(tmp0_desc);
    return CandidateDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_0).tgu = function (encoder, value) {
    var tmp0_desc = this.rgu_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().qgu_1;
    tmp1_output.h9e(tmp0_desc, 0, $serializer_getInstance_1(), value.xgt_1);
    tmp1_output.h9e(tmp0_desc, 1, StringSerializer_getInstance(), value.ygt_1);
    tmp1_output.h9e(tmp0_desc, 2, IntSerializer_getInstance(), value.zgt_1);
    tmp1_output.h9e(tmp0_desc, 3, tmp2_cached[3], value.agu_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_0).p99 = function (encoder, value) {
    return this.tgu(encoder, value instanceof CandidateDto ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function CandidateDto_init_$Init$(seen1, content, finishReason, index, safetyRatings, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_0().rgu_1);
    }
    $this.xgt_1 = content;
    $this.ygt_1 = finishReason;
    $this.zgt_1 = index;
    $this.agu_1 = safetyRatings;
    $this.bgu_1 = 0;
    return $this;
  }
  function CandidateDto_init_$Create$(seen1, content, finishReason, index, safetyRatings, serializationConstructorMarker) {
    return CandidateDto_init_$Init$(seen1, content, finishReason, index, safetyRatings, serializationConstructorMarker, objectCreate(protoOf(CandidateDto)));
  }
  function CandidateDto() {
  }
  protoOf(CandidateDto).toString = function () {
    return 'CandidateDto(content=' + this.xgt_1 + ', finishReason=' + this.ygt_1 + ', index=' + this.zgt_1 + ', safetyRatings=' + this.agu_1 + ')';
  };
  protoOf(CandidateDto).hashCode = function () {
    var result = this.xgt_1 == null ? 0 : this.xgt_1.hashCode();
    result = imul(result, 31) + (this.ygt_1 == null ? 0 : getStringHashCode(this.ygt_1)) | 0;
    result = imul(result, 31) + (this.zgt_1 == null ? 0 : this.zgt_1) | 0;
    result = imul(result, 31) + (this.agu_1 == null ? 0 : hashCode(this.agu_1)) | 0;
    return result;
  };
  protoOf(CandidateDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CandidateDto))
      return false;
    var tmp0_other_with_cast = other instanceof CandidateDto ? other : THROW_CCE();
    if (!equals(this.xgt_1, tmp0_other_with_cast.xgt_1))
      return false;
    if (!(this.ygt_1 == tmp0_other_with_cast.ygt_1))
      return false;
    if (!(this.zgt_1 == tmp0_other_with_cast.zgt_1))
      return false;
    if (!equals(this.agu_1, tmp0_other_with_cast.agu_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_3 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ugu_1 = [new ArrayListSerializer($serializer_getInstance_2()), null];
  }
  var Companion_instance_3;
  function Companion_getInstance_12() {
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    this.wgu_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.models.ContentDto', this, 2);
    tmp0_serialDesc.s9j('parts', false);
    tmp0_serialDesc.s9j('role', false);
    this.vgu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).o99 = function () {
    return this.vgu_1;
  };
  protoOf($serializer_1).u9j = function () {
    var tmp0_cached = Companion_getInstance_12().ugu_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_1).q99 = function (decoder) {
    var tmp0_desc = this.vgu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    var tmp8_cached = Companion_getInstance_12().ugu_1;
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return ContentDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).xgu = function (encoder, value) {
    var tmp0_desc = this.vgu_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().ugu_1;
    tmp1_output.h9e(tmp0_desc, 0, tmp2_cached[0], value.cgu_1);
    tmp1_output.h9e(tmp0_desc, 1, StringSerializer_getInstance(), value.dgu_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_1).p99 = function (encoder, value) {
    return this.xgu(encoder, value instanceof ContentDto ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function ContentDto_init_$Init$(seen1, parts, role, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_1().vgu_1);
    }
    $this.cgu_1 = parts;
    $this.dgu_1 = role;
    $this.egu_1 = 8;
    return $this;
  }
  function ContentDto_init_$Create$(seen1, parts, role, serializationConstructorMarker) {
    return ContentDto_init_$Init$(seen1, parts, role, serializationConstructorMarker, objectCreate(protoOf(ContentDto)));
  }
  function ContentDto() {
  }
  protoOf(ContentDto).toString = function () {
    return 'ContentDto(parts=' + this.cgu_1 + ', role=' + this.dgu_1 + ')';
  };
  protoOf(ContentDto).hashCode = function () {
    var result = this.cgu_1 == null ? 0 : hashCode(this.cgu_1);
    result = imul(result, 31) + (this.dgu_1 == null ? 0 : getStringHashCode(this.dgu_1)) | 0;
    return result;
  };
  protoOf(ContentDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContentDto))
      return false;
    var tmp0_other_with_cast = other instanceof ContentDto ? other : THROW_CCE();
    if (!equals(this.cgu_1, tmp0_other_with_cast.cgu_1))
      return false;
    if (!(this.dgu_1 == tmp0_other_with_cast.dgu_1))
      return false;
    return true;
  };
  function $serializer_2() {
    $serializer_instance_2 = this;
    this.zgu_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.models.PartDto', this, 1);
    tmp0_serialDesc.s9j('text', false);
    this.ygu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).o99 = function () {
    return this.ygu_1;
  };
  protoOf($serializer_2).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_2).q99 = function (decoder) {
    var tmp0_desc = this.ygu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q9c(tmp0_desc);
    if (tmp6_input.f9d()) {
      tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r9c(tmp0_desc);
    return PartDto_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_2).agv = function (encoder, value) {
    var tmp0_desc = this.ygu_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    tmp1_output.h9e(tmp0_desc, 0, StringSerializer_getInstance(), value.fgu_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_2).p99 = function (encoder, value) {
    return this.agv(encoder, value instanceof PartDto ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function PartDto_init_$Init$(seen1, text, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().ygu_1);
    }
    $this.fgu_1 = text;
    $this.ggu_1 = 0;
    return $this;
  }
  function PartDto_init_$Create$(seen1, text, serializationConstructorMarker) {
    return PartDto_init_$Init$(seen1, text, serializationConstructorMarker, objectCreate(protoOf(PartDto)));
  }
  function PartDto() {
  }
  protoOf(PartDto).toString = function () {
    return 'PartDto(text=' + this.fgu_1 + ')';
  };
  protoOf(PartDto).hashCode = function () {
    return this.fgu_1 == null ? 0 : getStringHashCode(this.fgu_1);
  };
  protoOf(PartDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PartDto))
      return false;
    var tmp0_other_with_cast = other instanceof PartDto ? other : THROW_CCE();
    if (!(this.fgu_1 == tmp0_other_with_cast.fgu_1))
      return false;
    return true;
  };
  function Companion_2() {
    Companion_instance_4 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bgv_1 = [new ArrayListSerializer($serializer_getInstance_4())];
  }
  var Companion_instance_4;
  function Companion_getInstance_13() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    this.dgv_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.models.PromptFeedbackDto', this, 1);
    tmp0_serialDesc.s9j('safetyRatings', false);
    this.cgv_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).o99 = function () {
    return this.cgv_1;
  };
  protoOf($serializer_3).u9j = function () {
    var tmp0_cached = Companion_getInstance_13().bgv_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0])];
  };
  protoOf($serializer_3).q99 = function (decoder) {
    var tmp0_desc = this.cgv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q9c(tmp0_desc);
    var tmp7_cached = Companion_getInstance_13().bgv_1;
    if (tmp6_input.f9d()) {
      tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r9c(tmp0_desc);
    return PromptFeedbackDto_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_3).egv = function (encoder, value) {
    var tmp0_desc = this.cgv_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().bgv_1;
    tmp1_output.h9e(tmp0_desc, 0, tmp2_cached[0], value.hgu_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_3).p99 = function (encoder, value) {
    return this.egv(encoder, value instanceof PromptFeedbackDto ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function PromptFeedbackDto_init_$Init$(seen1, safetyRatings, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().cgv_1);
    }
    $this.hgu_1 = safetyRatings;
    $this.igu_1 = 8;
    return $this;
  }
  function PromptFeedbackDto_init_$Create$(seen1, safetyRatings, serializationConstructorMarker) {
    return PromptFeedbackDto_init_$Init$(seen1, safetyRatings, serializationConstructorMarker, objectCreate(protoOf(PromptFeedbackDto)));
  }
  function PromptFeedbackDto() {
  }
  protoOf(PromptFeedbackDto).toString = function () {
    return 'PromptFeedbackDto(safetyRatings=' + this.hgu_1 + ')';
  };
  protoOf(PromptFeedbackDto).hashCode = function () {
    return this.hgu_1 == null ? 0 : hashCode(this.hgu_1);
  };
  protoOf(PromptFeedbackDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PromptFeedbackDto))
      return false;
    var tmp0_other_with_cast = other instanceof PromptFeedbackDto ? other : THROW_CCE();
    if (!equals(this.hgu_1, tmp0_other_with_cast.hgu_1))
      return false;
    return true;
  };
  function $serializer_4() {
    $serializer_instance_4 = this;
    this.ggv_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.models.SafetyRatingDto', this, 2);
    tmp0_serialDesc.s9j('category', false);
    tmp0_serialDesc.s9j('probability', false);
    this.fgv_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).o99 = function () {
    return this.fgv_1;
  };
  protoOf($serializer_4).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_4).q99 = function (decoder) {
    var tmp0_desc = this.fgv_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return SafetyRatingDto_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_4).hgv = function (encoder, value) {
    var tmp0_desc = this.fgv_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    tmp1_output.h9e(tmp0_desc, 0, StringSerializer_getInstance(), value.jgu_1);
    tmp1_output.h9e(tmp0_desc, 1, StringSerializer_getInstance(), value.kgu_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_4).p99 = function (encoder, value) {
    return this.hgv(encoder, value instanceof SafetyRatingDto ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function SafetyRatingDto_init_$Init$(seen1, category, probability, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_4().fgv_1);
    }
    $this.jgu_1 = category;
    $this.kgu_1 = probability;
    $this.lgu_1 = 0;
    return $this;
  }
  function SafetyRatingDto_init_$Create$(seen1, category, probability, serializationConstructorMarker) {
    return SafetyRatingDto_init_$Init$(seen1, category, probability, serializationConstructorMarker, objectCreate(protoOf(SafetyRatingDto)));
  }
  function SafetyRatingDto() {
  }
  protoOf(SafetyRatingDto).toString = function () {
    return 'SafetyRatingDto(category=' + this.jgu_1 + ', probability=' + this.kgu_1 + ')';
  };
  protoOf(SafetyRatingDto).hashCode = function () {
    var result = this.jgu_1 == null ? 0 : getStringHashCode(this.jgu_1);
    result = imul(result, 31) + (this.kgu_1 == null ? 0 : getStringHashCode(this.kgu_1)) | 0;
    return result;
  };
  protoOf(SafetyRatingDto).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SafetyRatingDto))
      return false;
    var tmp0_other_with_cast = other instanceof SafetyRatingDto ? other : THROW_CCE();
    if (!(this.jgu_1 == tmp0_other_with_cast.jgu_1))
      return false;
    if (!(this.kgu_1 == tmp0_other_with_cast.kgu_1))
      return false;
    return true;
  };
  function NGeminiService() {
  }
  function $generateContentCOROUTINE$0(_this__u8e3s4, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sgv_1 = _this__u8e3s4;
    this.tgv_1 = content;
  }
  protoOf($generateContentCOROUTINE$0).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 4;
            this.ugv_1 = Constant_getInstance().hgw_1;
            this.vgv_1 = (new RequestBuilder()).v3d(this.tgv_1).x1p();
            this.dc_1 = 3;
            var tmp_0 = this;
            tmp_0.xgv_1 = this.sgv_1.mgw_1;
            var tmp_1 = this;
            tmp_1.ygv_1 = this.ugv_1;
            var tmp_2 = this;
            tmp_2.zgv_1 = this.xgv_1;
            var tmp_3 = this;
            tmp_3.agw_1 = this.zgv_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.ygv_1);
            header(this_0, HttpHeaders_getInstance().e8x_1, Application_getInstance().a8v_1.toString());
            var tmp_5 = this_0;
            var this_1 = this.vgv_1;
            var this_2 = Default_getInstance();
            var this_3 = this_2.j9a();
            var this_4 = serializer(this_3, createKType(getKClass(RequestBody), arrayOf([]), false));
            tmp_5.mfe_1 = this_2.h9a(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), this_1);
            tmp_4.bgw_1 = this_0;
            this.bgw_1.kfe_1 = Companion_getInstance().r90_1;
            var tmp_6 = this;
            tmp_6.cgw_1 = this.agw_1;
            var tmp_7 = this;
            tmp_7.dgw_1 = this.bgw_1;
            this.cc_1 = 1;
            suspendResult = (new HttpStatement(this.dgw_1, this.cgw_1)).wg6(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.egw_1 = suspendResult;
            this.cc_1 = 2;
            suspendResult = bodyAsText(this.egw_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseText = suspendResult;
            println('API Response: ' + responseText);
            var tmp_8 = this;
            var this_5 = Default_getInstance();
            var this_6 = this_5.j9a();
            var this_7 = serializer(this_6, createKType(getKClass(NGeminiResponseDto), arrayOf([]), false));
            tmp_8.wgv_1 = this_5.i9a(isInterface(this_7, KSerializer) ? this_7 : THROW_CCE(), responseText);
            this.dc_1 = 4;
            this.cc_1 = 5;
            continue $sm;
          case 3:
            this.dc_1 = 4;
            var tmp_9 = this.fc_1;
            if (tmp_9 instanceof Exception) {
              var e = this.fc_1;
              var tmp_10 = this;
              println('Error during API request: ' + e.message);
              throw e;
            } else {
              throw this.fc_1;
            }

          case 4:
            throw this.fc_1;
          case 5:
            this.dc_1 = 4;
            return this.wgv_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.dc_1 === 4) {
          throw e_0;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e_0;
        }
      }
     while (true);
  };
  function $generateContentWithImageCOROUTINE$1(_this__u8e3s4, content, images, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wgw_1 = _this__u8e3s4;
    this.xgw_1 = content;
    this.ygw_1 = images;
  }
  protoOf($generateContentWithImageCOROUTINE$1).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 4;
            this.zgw_1 = Constant_getInstance().igw_1;
            this.agx_1 = (new RequestBuilder()).v3d(this.xgw_1).kgx(this.ygw_1).x1p();
            this.dc_1 = 3;
            var tmp_0 = this;
            tmp_0.cgx_1 = this.wgw_1.mgw_1;
            var tmp_1 = this;
            tmp_1.dgx_1 = this.zgw_1;
            var tmp_2 = this;
            tmp_2.egx_1 = this.cgx_1;
            var tmp_3 = this;
            tmp_3.fgx_1 = this.egx_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.dgx_1);
            header(this_0, HttpHeaders_getInstance().e8x_1, Application_getInstance().a8v_1.toString());
            var tmp_5 = this_0;
            var this_1 = this.agx_1;
            var this_2 = Default_getInstance();
            var this_3 = this_2.j9a();
            var this_4 = serializer(this_3, createKType(getKClass(RequestBody), arrayOf([]), false));
            tmp_5.mfe_1 = this_2.h9a(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), this_1);
            tmp_4.ggx_1 = this_0;
            this.ggx_1.kfe_1 = Companion_getInstance().r90_1;
            var tmp_6 = this;
            tmp_6.hgx_1 = this.fgx_1;
            var tmp_7 = this;
            tmp_7.igx_1 = this.ggx_1;
            this.cc_1 = 1;
            suspendResult = (new HttpStatement(this.igx_1, this.hgx_1)).wg6(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.jgx_1 = suspendResult;
            this.cc_1 = 2;
            suspendResult = bodyAsText(this.jgx_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseText = suspendResult;
            println('API Response: ' + responseText);
            var tmp_8 = this;
            var this_5 = Default_getInstance();
            var this_6 = this_5.j9a();
            var this_7 = serializer(this_6, createKType(getKClass(NGeminiResponseDto), arrayOf([]), false));
            tmp_8.bgx_1 = this_5.i9a(isInterface(this_7, KSerializer) ? this_7 : THROW_CCE(), responseText);
            this.dc_1 = 4;
            this.cc_1 = 5;
            continue $sm;
          case 3:
            this.dc_1 = 4;
            var tmp_9 = this.fc_1;
            if (tmp_9 instanceof Exception) {
              var e = this.fc_1;
              var tmp_10 = this;
              println('Error during API request: ' + e.message);
              throw e;
            } else {
              throw this.fc_1;
            }

          case 4:
            throw this.fc_1;
          case 5:
            this.dc_1 = 4;
            return this.bgx_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.dc_1 === 4) {
          throw e_0;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e_0;
        }
      }
     while (true);
  };
  function NGeminiServiceImp(client) {
    this.mgw_1 = client;
    this.ngw_1 = 0;
  }
  protoOf(NGeminiServiceImp).igv = function (content, $completion) {
    var tmp = new $generateContentCOROUTINE$0(this, content, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(NGeminiServiceImp).jgv = function (content, images, $completion) {
    var tmp = new $generateContentWithImageCOROUTINE$1(this, content, images, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  function Constant() {
    Constant_instance = this;
    this.fgw_1 = 'https://generativelanguage.googleapis.com';
    this.ggw_1 = BuildKonfig_instance.rgt_1;
    this.hgw_1 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + this.ggw_1;
    this.igw_1 = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=' + this.ggw_1;
    this.jgw_1 = 0;
  }
  var Constant_instance;
  function Constant_getInstance() {
    if (Constant_instance == null)
      new Constant();
    return Constant_instance;
  }
  function Companion_3() {
    Companion_instance_5 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.lgx_1 = [new ArrayListSerializer($serializer_getInstance_7())];
  }
  var Companion_instance_5;
  function Companion_getInstance_14() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    this.ngx_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.network.utils.ContentItem', this, 1);
    tmp0_serialDesc.s9j('parts', false);
    this.mgx_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).o99 = function () {
    return this.mgx_1;
  };
  protoOf($serializer_5).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_14().lgx_1[0]];
  };
  protoOf($serializer_5).q99 = function (decoder) {
    var tmp0_desc = this.mgx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q9c(tmp0_desc);
    var tmp7_cached = Companion_getInstance_14().lgx_1;
    if (tmp6_input.f9d()) {
      tmp4_local0 = tmp6_input.c9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.c9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r9c(tmp0_desc);
    return ContentItem_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_5).ogx = function (encoder, value) {
    var tmp0_desc = this.mgx_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().lgx_1;
    tmp1_output.f9e(tmp0_desc, 0, tmp2_cached[0], value.pgx_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_5).p99 = function (encoder, value) {
    return this.ogx(encoder, value instanceof ContentItem ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function ContentItem_init_$Init$(seen1, parts, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_5().mgx_1);
    }
    $this.pgx_1 = parts;
    $this.qgx_1 = 8;
    return $this;
  }
  function ContentItem_init_$Create$(seen1, parts, serializationConstructorMarker) {
    return ContentItem_init_$Init$(seen1, parts, serializationConstructorMarker, objectCreate(protoOf(ContentItem)));
  }
  function ContentItem(parts) {
    Companion_getInstance_14();
    this.pgx_1 = parts;
    this.qgx_1 = 8;
  }
  protoOf(ContentItem).toString = function () {
    return 'ContentItem(parts=' + this.pgx_1 + ')';
  };
  protoOf(ContentItem).hashCode = function () {
    return hashCode(this.pgx_1);
  };
  protoOf(ContentItem).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContentItem))
      return false;
    var tmp0_other_with_cast = other instanceof ContentItem ? other : THROW_CCE();
    if (!equals(this.pgx_1, tmp0_other_with_cast.pgx_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_6 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rgx_1 = [new ArrayListSerializer($serializer_getInstance_5())];
  }
  var Companion_instance_6;
  function Companion_getInstance_15() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    this.tgx_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.network.utils.RequestBody', this, 1);
    tmp0_serialDesc.s9j('contents', false);
    this.sgx_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).o99 = function () {
    return this.sgx_1;
  };
  protoOf($serializer_6).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_15().rgx_1[0]];
  };
  protoOf($serializer_6).q99 = function (decoder) {
    var tmp0_desc = this.sgx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q9c(tmp0_desc);
    var tmp7_cached = Companion_getInstance_15().rgx_1;
    if (tmp6_input.f9d()) {
      tmp4_local0 = tmp6_input.c9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.c9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r9c(tmp0_desc);
    return RequestBody_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_6).ugx = function (encoder, value) {
    var tmp0_desc = this.sgx_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().rgx_1;
    tmp1_output.f9e(tmp0_desc, 0, tmp2_cached[0], value.vgx_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_6).p99 = function (encoder, value) {
    return this.ugx(encoder, value instanceof RequestBody ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function RequestBody_init_$Init$(seen1, contents, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_6().sgx_1);
    }
    $this.vgx_1 = contents;
    $this.wgx_1 = 8;
    return $this;
  }
  function RequestBody_init_$Create$(seen1, contents, serializationConstructorMarker) {
    return RequestBody_init_$Init$(seen1, contents, serializationConstructorMarker, objectCreate(protoOf(RequestBody)));
  }
  function RequestBody(contents) {
    Companion_getInstance_15();
    this.vgx_1 = contents;
    this.wgx_1 = 8;
  }
  protoOf(RequestBody).toString = function () {
    return 'RequestBody(contents=' + this.vgx_1 + ')';
  };
  protoOf(RequestBody).hashCode = function () {
    return hashCode(this.vgx_1);
  };
  protoOf(RequestBody).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequestBody))
      return false;
    var tmp0_other_with_cast = other instanceof RequestBody ? other : THROW_CCE();
    if (!equals(this.vgx_1, tmp0_other_with_cast.vgx_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  var Companion_instance_7;
  function Companion_getInstance_16() {
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    this.ygx_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.network.utils.RequestPart', this, 2);
    tmp0_serialDesc.s9j('text', true);
    tmp0_serialDesc.s9j('inlineData', true);
    this.xgx_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).o99 = function () {
    return this.xgx_1;
  };
  protoOf($serializer_7).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_8())];
  };
  protoOf($serializer_7).q99 = function (decoder) {
    var tmp0_desc = this.xgx_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, $serializer_getInstance_8(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, $serializer_getInstance_8(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return RequestPart_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).zgx = function (encoder, value) {
    var tmp0_desc = this.xgx_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    if (tmp1_output.l9e(tmp0_desc, 0) ? true : !(value.agy_1 == null)) {
      tmp1_output.h9e(tmp0_desc, 0, StringSerializer_getInstance(), value.agy_1);
    }
    if (tmp1_output.l9e(tmp0_desc, 1) ? true : !(value.bgy_1 == null)) {
      tmp1_output.h9e(tmp0_desc, 1, $serializer_getInstance_8(), value.bgy_1);
    }
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_7).p99 = function (encoder, value) {
    return this.zgx(encoder, value instanceof RequestPart ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function RequestPart_init_$Init$(seen1, text, inlineData, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen1))) {
      throwMissingFieldException(seen1, 0, $serializer_getInstance_7().xgx_1);
    }
    if (0 === (seen1 & 1))
      $this.agy_1 = null;
    else
      $this.agy_1 = text;
    if (0 === (seen1 & 2))
      $this.bgy_1 = null;
    else
      $this.bgy_1 = inlineData;
    $this.cgy_1 = 0;
    return $this;
  }
  function RequestPart_init_$Create$(seen1, text, inlineData, serializationConstructorMarker) {
    return RequestPart_init_$Init$(seen1, text, inlineData, serializationConstructorMarker, objectCreate(protoOf(RequestPart)));
  }
  function RequestPart(text, inlineData) {
    text = text === VOID ? null : text;
    inlineData = inlineData === VOID ? null : inlineData;
    this.agy_1 = text;
    this.bgy_1 = inlineData;
    this.cgy_1 = 0;
  }
  protoOf(RequestPart).toString = function () {
    return 'RequestPart(text=' + this.agy_1 + ', inlineData=' + this.bgy_1 + ')';
  };
  protoOf(RequestPart).hashCode = function () {
    var result = this.agy_1 == null ? 0 : getStringHashCode(this.agy_1);
    result = imul(result, 31) + (this.bgy_1 == null ? 0 : this.bgy_1.hashCode()) | 0;
    return result;
  };
  protoOf(RequestPart).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequestPart))
      return false;
    var tmp0_other_with_cast = other instanceof RequestPart ? other : THROW_CCE();
    if (!(this.agy_1 == tmp0_other_with_cast.agy_1))
      return false;
    if (!equals(this.bgy_1, tmp0_other_with_cast.bgy_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  var Companion_instance_8;
  function Companion_getInstance_17() {
    return Companion_instance_8;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    this.egy_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('data.network.utils.RequestInlineData', this, 2);
    tmp0_serialDesc.s9j('mimeType', false);
    tmp0_serialDesc.s9j('data', false);
    this.dgy_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).o99 = function () {
    return this.dgy_1;
  };
  protoOf($serializer_8).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  protoOf($serializer_8).q99 = function (decoder) {
    var tmp0_desc = this.dgy_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.a9d(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.a9d(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.a9d(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.a9d(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return RequestInlineData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_8).fgy = function (encoder, value) {
    var tmp0_desc = this.dgy_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    tmp1_output.d9e(tmp0_desc, 0, value.ggy_1);
    tmp1_output.d9e(tmp0_desc, 1, value.hgy_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_8).p99 = function (encoder, value) {
    return this.fgy(encoder, value instanceof RequestInlineData ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function RequestInlineData_init_$Init$(seen1, mimeType, data, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_8().dgy_1);
    }
    $this.ggy_1 = mimeType;
    $this.hgy_1 = data;
    $this.igy_1 = 0;
    return $this;
  }
  function RequestInlineData_init_$Create$(seen1, mimeType, data, serializationConstructorMarker) {
    return RequestInlineData_init_$Init$(seen1, mimeType, data, serializationConstructorMarker, objectCreate(protoOf(RequestInlineData)));
  }
  function RequestInlineData(mimeType, data) {
    this.ggy_1 = mimeType;
    this.hgy_1 = data;
    this.igy_1 = 0;
  }
  protoOf(RequestInlineData).toString = function () {
    return 'RequestInlineData(mimeType=' + this.ggy_1 + ', data=' + this.hgy_1 + ')';
  };
  protoOf(RequestInlineData).hashCode = function () {
    var result = getStringHashCode(this.ggy_1);
    result = imul(result, 31) + getStringHashCode(this.hgy_1) | 0;
    return result;
  };
  protoOf(RequestInlineData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RequestInlineData))
      return false;
    var tmp0_other_with_cast = other instanceof RequestInlineData ? other : THROW_CCE();
    if (!(this.ggy_1 === tmp0_other_with_cast.ggy_1))
      return false;
    if (!(this.hgy_1 === tmp0_other_with_cast.hgy_1))
      return false;
    return true;
  };
  function RequestBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.kgw_1 = ArrayList_init_$Create$_0();
    this.lgw_1 = 8;
  }
  protoOf(RequestBuilder).v3d = function (content) {
    this.kgw_1.a1(new RequestPart(content));
    return this;
  };
  protoOf(RequestBuilder).jgy = function (images, mimeType) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(images, 10));
    var tmp0_iterator = images.o();
    while (tmp0_iterator.d1()) {
      var item = tmp0_iterator.f1();
      // Inline function 'data.network.utils.RequestBuilder.addImage.<anonymous>' call
      var inlineData = new RequestInlineData(mimeType, encodeBase64(item));
      var tmp$ret$0 = this.kgw_1.a1(new RequestPart(VOID, inlineData));
      destination.a1(tmp$ret$0);
    }
    return this;
  };
  protoOf(RequestBuilder).kgx = function (images, mimeType, $super) {
    mimeType = mimeType === VOID ? 'image/jpeg' : mimeType;
    return $super === VOID ? this.jgy(images, mimeType) : $super.jgy.call(this, images, mimeType);
  };
  protoOf(RequestBuilder).x1p = function () {
    return new RequestBody(listOf(new ContentItem(this.kgw_1)));
  };
  function $generateContentCOROUTINE$2(_this__u8e3s4, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sgy_1 = _this__u8e3s4;
    this.tgy_1 = content;
  }
  protoOf($generateContentCOROUTINE$2).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 2;
            this.cc_1 = 1;
            suspendResult = this.sgy_1.ugy_1.igv(this.tgy_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return toNGemini(ARGUMENT);
          case 2:
            throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.dc_1 === 2) {
          throw e;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e;
        }
      }
     while (true);
  };
  function $generateContentWithImageCOROUTINE$3(_this__u8e3s4, content, images, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.egz_1 = _this__u8e3s4;
    this.fgz_1 = content;
    this.ggz_1 = images;
  }
  protoOf($generateContentWithImageCOROUTINE$3).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 2;
            this.cc_1 = 1;
            suspendResult = this.egz_1.ugy_1.jgv(this.fgz_1, this.ggz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return toNGemini(ARGUMENT);
          case 2:
            throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.dc_1 === 2) {
          throw e;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e;
        }
      }
     while (true);
  };
  function NGeminiRepositoryImp(nGeminiService) {
    this.ugy_1 = nGeminiService;
    this.vgy_1 = 8;
  }
  protoOf(NGeminiRepositoryImp).hgz = function (content, $completion) {
    var tmp = new $generateContentCOROUTINE$2(this, content, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(NGeminiRepositoryImp).igz = function (content, images, $completion) {
    var tmp = new $generateContentWithImageCOROUTINE$3(this, content, images, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  function get_nGeminiServiceModule() {
    _init_properties_NGeminiServiceModule_kt__nydjz6();
    return nGeminiServiceModule;
  }
  var nGeminiServiceModule;
  function nGeminiServiceModule$lambda($this$module) {
    _init_properties_NGeminiServiceModule_kt__nydjz6();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = nGeminiServiceModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_0().nf9_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(NGeminiService), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.rfa(factory);
    if (false ? true : $this$module.kfa_1) {
      $this$module.tfa(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_instance;
  }
  function nGeminiServiceModule$lambda$lambda($this$single, it) {
    _init_properties_NGeminiServiceModule_kt__nydjz6();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.rfb(getKClass(HttpClient), null, null);
    return new NGeminiServiceImp(tmp$ret$0);
  }
  var properties_initialized_NGeminiServiceModule_kt_h9zhxc;
  function _init_properties_NGeminiServiceModule_kt__nydjz6() {
    if (!properties_initialized_NGeminiServiceModule_kt_h9zhxc) {
      properties_initialized_NGeminiServiceModule_kt_h9zhxc = true;
      nGeminiServiceModule = module_0(VOID, nGeminiServiceModule$lambda);
    }
  }
  function get_networkModule() {
    _init_properties_NetworkModule_kt__uh6uyg();
    return networkModule;
  }
  var networkModule;
  function networkModule$lambda($this$module) {
    _init_properties_NetworkModule_kt__uh6uyg();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = networkModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_0().nf9_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(HttpClient), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.rfa(factory);
    if (false ? true : $this$module.kfa_1) {
      $this$module.tfa(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_instance;
  }
  function networkModule$lambda$lambda($this$single, it) {
    _init_properties_NetworkModule_kt__uh6uyg();
    return HttpClient_0(networkModule$lambda$lambda$lambda);
  }
  function networkModule$lambda$lambda$lambda($this$HttpClient) {
    _init_properties_NetworkModule_kt__uh6uyg();
    $this$HttpClient.vfe_1 = true;
    var tmp = Plugin_getInstance();
    $this$HttpClient.qff(tmp, networkModule$lambda$lambda$lambda$lambda);
    var tmp_0 = Plugin_getInstance_0();
    $this$HttpClient.qff(tmp_0, networkModule$lambda$lambda$lambda$lambda_0);
    var tmp_1 = Companion_getInstance_1();
    $this$HttpClient.qff(tmp_1, networkModule$lambda$lambda$lambda$lambda_1);
    return Unit_instance;
  }
  function networkModule$lambda$lambda$lambda$lambda($this$install) {
    _init_properties_NetworkModule_kt__uh6uyg();
    json($this$install, Json(VOID, networkModule$lambda$lambda$lambda$lambda$lambda));
    return Unit_instance;
  }
  function networkModule$lambda$lambda$lambda$lambda$lambda($this$Json) {
    _init_properties_NetworkModule_kt__uh6uyg();
    $this$Json.c9y_1 = true;
    $this$Json.a9y_1 = false;
    $this$Json.z9x_1 = true;
    $this$Json.b9y_1 = true;
    return Unit_instance;
  }
  function networkModule$lambda$lambda$lambda$lambda_0($this$install) {
    _init_properties_NetworkModule_kt__uh6uyg();
    $this$install.lfy(new Long(30000, 0));
    $this$install.mfy(new Long(30000, 0));
    $this$install.kfy(new Long(30000, 0));
    return Unit_instance;
  }
  function networkModule$lambda$lambda$lambda$lambda_1($this$install) {
    _init_properties_NetworkModule_kt__uh6uyg();
    $this$install.vgo(get_DEFAULT(Companion_instance));
    $this$install.ugo_1 = LogLevel_ALL_getInstance();
    $this$install.vgo(new networkModule$1$1$1$3$1());
    return Unit_instance;
  }
  function networkModule$1$1$1$3$1() {
  }
  protoOf(networkModule$1$1$1$3$1).fgn = function (message) {
    println('HTTP Client: ' + message);
  };
  var properties_initialized_NetworkModule_kt_a8gwnq;
  function _init_properties_NetworkModule_kt__uh6uyg() {
    if (!properties_initialized_NetworkModule_kt_a8gwnq) {
      properties_initialized_NetworkModule_kt_a8gwnq = true;
      networkModule = module_0(VOID, networkModule$lambda);
    }
  }
  function get_nGeminiRepositoryModule() {
    _init_properties_RepositoryModule_kt__rvfmoa();
    return nGeminiRepositoryModule;
  }
  var nGeminiRepositoryModule;
  function nGeminiRepositoryModule$lambda($this$module) {
    _init_properties_RepositoryModule_kt__rvfmoa();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = nGeminiRepositoryModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_0().nf9_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(NGeminiRepository), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.rfa(factory);
    if (false ? true : $this$module.kfa_1) {
      $this$module.tfa(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_instance;
  }
  function nGeminiRepositoryModule$lambda$lambda($this$single, it) {
    _init_properties_RepositoryModule_kt__rvfmoa();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.rfb(getKClass(NGeminiService), null, null);
    return new NGeminiRepositoryImp(tmp$ret$0);
  }
  var properties_initialized_RepositoryModule_kt_pmtavs;
  function _init_properties_RepositoryModule_kt__rvfmoa() {
    if (!properties_initialized_RepositoryModule_kt_pmtavs) {
      properties_initialized_RepositoryModule_kt_pmtavs = true;
      nGeminiRepositoryModule = module_0(VOID, nGeminiRepositoryModule$lambda);
    }
  }
  function get_useCaseModule() {
    _init_properties_UseCaseModule_kt__x126y9();
    return useCaseModule;
  }
  var useCaseModule;
  function useCaseModule$lambda($this$module) {
    _init_properties_UseCaseModule_kt__x126y9();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = useCaseModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_0().nf9_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(IGetContentUseCase), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.rfa(factory);
    if (false ? true : $this$module.kfa_1) {
      $this$module.tfa(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_instance;
  }
  function useCaseModule$lambda$lambda($this$single, it) {
    _init_properties_UseCaseModule_kt__x126y9();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.rfb(getKClass(NGeminiRepository), null, null);
    return new GetContentUseCase(tmp$ret$0);
  }
  var properties_initialized_UseCaseModule_kt_1gpe43;
  function _init_properties_UseCaseModule_kt__x126y9() {
    if (!properties_initialized_UseCaseModule_kt_1gpe43) {
      properties_initialized_UseCaseModule_kt_1gpe43 = true;
      useCaseModule = module_0(VOID, useCaseModule$lambda);
    }
  }
  function get_viewModelModule() {
    _init_properties_ViewModelModule_kt__p69vby();
    return viewModelModule;
  }
  var viewModelModule;
  function viewModelModule$lambda($this$module) {
    _init_properties_ViewModelModule_kt__p69vby();
    // Inline function 'org.koin.core.module.Module.single' call
    // Inline function 'org.koin.core.module._singleInstanceFactory' call
    var definition = viewModelModule$lambda$lambda;
    var scopeQualifier = Companion_getInstance_0().nf9_1;
    // Inline function 'org.koin.core.definition._createDefinition' call
    var kind = Kind_Singleton_getInstance();
    var secondaryTypes = emptyList();
    var def = new BeanDefinition(scopeQualifier, getKClass(ChatViewModel), null, definition, kind, secondaryTypes);
    var factory = new SingleInstanceFactory(def);
    $this$module.rfa(factory);
    if (false ? true : $this$module.kfa_1) {
      $this$module.tfa(factory);
    }
    new KoinDefinition($this$module, factory);
    return Unit_instance;
  }
  function viewModelModule$lambda$lambda($this$single, it) {
    _init_properties_ViewModelModule_kt__p69vby();
    // Inline function 'org.koin.core.scope.Scope.get' call
    var tmp$ret$0 = $this$single.rfb(getKClass(IGetContentUseCase), null, null);
    return new ChatViewModel(tmp$ret$0);
  }
  var properties_initialized_ViewModelModule_kt_x4l668;
  function _init_properties_ViewModelModule_kt__p69vby() {
    if (!properties_initialized_ViewModelModule_kt_x4l668) {
      properties_initialized_ViewModelModule_kt_x4l668 = true;
      viewModelModule = module_0(VOID, viewModelModule$lambda);
    }
  }
  function Companion_7() {
    Companion_instance_9 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.jgz_1 = [null, new ArrayListSerializer(ByteArraySerializer_getInstance()), null];
  }
  var Companion_instance_9;
  function Companion_getInstance_18() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    this.lgz_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('domain.models.ChatMessage', this, 3);
    tmp0_serialDesc.s9j('text', false);
    tmp0_serialDesc.s9j('images', true);
    tmp0_serialDesc.s9j('role', true);
    this.kgz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).o99 = function () {
    return this.kgz_1;
  };
  protoOf($serializer_9).u9j = function () {
    var tmp0_cached = Companion_getInstance_18().jgz_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1], StringSerializer_getInstance()];
  };
  protoOf($serializer_9).q99 = function (decoder) {
    var tmp0_desc = this.kgz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp8_input = decoder.q9c(tmp0_desc);
    var tmp9_cached = Companion_getInstance_18().jgz_1;
    if (tmp8_input.f9d()) {
      tmp4_local0 = tmp8_input.a9d(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.c9d(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.a9d(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.a9d(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.c9d(tmp0_desc, 1, tmp9_cached[1], tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.a9d(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.r9c(tmp0_desc);
    return ChatMessage_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_9).mgz = function (encoder, value) {
    var tmp0_desc = this.kgz_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().jgz_1;
    tmp1_output.d9e(tmp0_desc, 0, value.ngz_1);
    if (tmp1_output.l9e(tmp0_desc, 1) ? true : !equals(value.ogz_1, emptyList())) {
      tmp1_output.f9e(tmp0_desc, 1, tmp2_cached[1], value.ogz_1);
    }
    if (tmp1_output.l9e(tmp0_desc, 2) ? true : !(value.pgz_1 === Role_USER_getInstance().tgz_1)) {
      tmp1_output.d9e(tmp0_desc, 2, value.pgz_1);
    }
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_9).p99 = function (encoder, value) {
    return this.mgz(encoder, value instanceof ChatMessage ? value : THROW_CCE());
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function ChatMessage_init_$Init$(seen1, text, images, role, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_9().kgz_1);
    }
    $this.ngz_1 = text;
    if (0 === (seen1 & 2))
      $this.ogz_1 = emptyList();
    else
      $this.ogz_1 = images;
    if (0 === (seen1 & 4))
      $this.pgz_1 = Role_USER_getInstance().tgz_1;
    else
      $this.pgz_1 = role;
    $this.qgz_1 = 8;
    return $this;
  }
  function ChatMessage_init_$Create$(seen1, text, images, role, serializationConstructorMarker) {
    return ChatMessage_init_$Init$(seen1, text, images, role, serializationConstructorMarker, objectCreate(protoOf(ChatMessage)));
  }
  function ChatMessage(text, images, role) {
    Companion_getInstance_18();
    images = images === VOID ? emptyList() : images;
    role = role === VOID ? Role_USER_getInstance().tgz_1 : role;
    this.ngz_1 = text;
    this.ogz_1 = images;
    this.pgz_1 = role;
    this.qgz_1 = 8;
  }
  protoOf(ChatMessage).ugz = function () {
    return this.pgz_1 === Role_MODEL_getInstance().tgz_1;
  };
  protoOf(ChatMessage).vgz = function (text, images, role) {
    return new ChatMessage(text, images, role);
  };
  protoOf(ChatMessage).wgz = function (text, images, role, $super) {
    text = text === VOID ? this.ngz_1 : text;
    images = images === VOID ? this.ogz_1 : images;
    role = role === VOID ? this.pgz_1 : role;
    return $super === VOID ? this.vgz(text, images, role) : $super.vgz.call(this, text, images, role);
  };
  protoOf(ChatMessage).toString = function () {
    return 'ChatMessage(text=' + this.ngz_1 + ', images=' + this.ogz_1 + ', role=' + this.pgz_1 + ')';
  };
  protoOf(ChatMessage).hashCode = function () {
    var result = getStringHashCode(this.ngz_1);
    result = imul(result, 31) + hashCode(this.ogz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pgz_1) | 0;
    return result;
  };
  protoOf(ChatMessage).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChatMessage))
      return false;
    var tmp0_other_with_cast = other instanceof ChatMessage ? other : THROW_CCE();
    if (!(this.ngz_1 === tmp0_other_with_cast.ngz_1))
      return false;
    if (!equals(this.ogz_1, tmp0_other_with_cast.ogz_1))
      return false;
    if (!(this.pgz_1 === tmp0_other_with_cast.pgz_1))
      return false;
    return true;
  };
  var Role_USER_instance;
  var Role_MODEL_instance;
  var Role_entriesInitialized;
  function Role_initEntries() {
    if (Role_entriesInitialized)
      return Unit_instance;
    Role_entriesInitialized = true;
    Role_USER_instance = new Role('USER', 0, 'You');
    Role_MODEL_instance = new Role('MODEL', 1, 'NGemini');
  }
  function Role(name, ordinal, roleName) {
    Enum.call(this, name, ordinal);
    this.tgz_1 = roleName;
  }
  function Role_USER_getInstance() {
    Role_initEntries();
    return Role_USER_instance;
  }
  function Role_MODEL_getInstance() {
    Role_initEntries();
    return Role_MODEL_instance;
  }
  function Companion_8() {
    Companion_instance_10 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xgz_1 = [null, null, null, new ArrayListSerializer($serializer_getInstance_14())];
  }
  var Companion_instance_10;
  function Companion_getInstance_19() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    this.zgz_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('domain.models.NGemini.Candidate', this, 4);
    tmp0_serialDesc.s9j('content', false);
    tmp0_serialDesc.s9j('finishReason', false);
    tmp0_serialDesc.s9j('index', false);
    tmp0_serialDesc.s9j('safetyRatings', false);
    this.ygz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).o99 = function () {
    return this.ygz_1;
  };
  protoOf($serializer_10).u9j = function () {
    var tmp0_cached = Companion_getInstance_19().xgz_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_11()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[3])];
  };
  protoOf($serializer_10).q99 = function (decoder) {
    var tmp0_desc = this.ygz_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp9_input = decoder.q9c(tmp0_desc);
    var tmp10_cached = Companion_getInstance_19().xgz_1;
    if (tmp9_input.f9d()) {
      tmp4_local0 = tmp9_input.e9d(tmp0_desc, 0, $serializer_getInstance_11(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.e9d(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.e9d(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.e9d(tmp0_desc, 0, $serializer_getInstance_11(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.e9d(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.e9d(tmp0_desc, 3, tmp10_cached[3], tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.r9c(tmp0_desc);
    return Candidate_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_10).ah0 = function (encoder, value) {
    var tmp0_desc = this.ygz_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().xgz_1;
    tmp1_output.h9e(tmp0_desc, 0, $serializer_getInstance_11(), value.bh0_1);
    tmp1_output.h9e(tmp0_desc, 1, StringSerializer_getInstance(), value.ch0_1);
    tmp1_output.h9e(tmp0_desc, 2, IntSerializer_getInstance(), value.dh0_1);
    tmp1_output.h9e(tmp0_desc, 3, tmp2_cached[3], value.eh0_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_10).p99 = function (encoder, value) {
    return this.ah0(encoder, value instanceof Candidate ? value : THROW_CCE());
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function Candidate_init_$Init$(seen1, content, finishReason, index, safetyRatings, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen1))) {
      throwMissingFieldException(seen1, 15, $serializer_getInstance_10().ygz_1);
    }
    $this.bh0_1 = content;
    $this.ch0_1 = finishReason;
    $this.dh0_1 = index;
    $this.eh0_1 = safetyRatings;
    $this.fh0_1 = 0;
    return $this;
  }
  function Candidate_init_$Create$(seen1, content, finishReason, index, safetyRatings, serializationConstructorMarker) {
    return Candidate_init_$Init$(seen1, content, finishReason, index, safetyRatings, serializationConstructorMarker, objectCreate(protoOf(Candidate)));
  }
  function Companion_9() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gh0_1 = [new ArrayListSerializer($serializer_getInstance_12()), null];
  }
  var Companion_instance_11;
  function Companion_getInstance_20() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    this.ih0_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('domain.models.NGemini.Content', this, 2);
    tmp0_serialDesc.s9j('parts', false);
    tmp0_serialDesc.s9j('role', false);
    this.hh0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).o99 = function () {
    return this.hh0_1;
  };
  protoOf($serializer_11).u9j = function () {
    var tmp0_cached = Companion_getInstance_20().gh0_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_11).q99 = function (decoder) {
    var tmp0_desc = this.hh0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    var tmp8_cached = Companion_getInstance_20().gh0_1;
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return Content_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).jh0 = function (encoder, value) {
    var tmp0_desc = this.hh0_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_20().gh0_1;
    tmp1_output.h9e(tmp0_desc, 0, tmp2_cached[0], value.kh0_1);
    tmp1_output.h9e(tmp0_desc, 1, StringSerializer_getInstance(), value.lh0_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_11).p99 = function (encoder, value) {
    return this.jh0(encoder, value instanceof Content ? value : THROW_CCE());
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function Content_init_$Init$(seen1, parts, role, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_11().hh0_1);
    }
    $this.kh0_1 = parts;
    $this.lh0_1 = role;
    $this.mh0_1 = 8;
    return $this;
  }
  function Content_init_$Create$(seen1, parts, role, serializationConstructorMarker) {
    return Content_init_$Init$(seen1, parts, role, serializationConstructorMarker, objectCreate(protoOf(Content)));
  }
  function Companion_10() {
  }
  var Companion_instance_12;
  function Companion_getInstance_21() {
    return Companion_instance_12;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    this.oh0_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('domain.models.NGemini.Part', this, 1);
    tmp0_serialDesc.s9j('text', false);
    this.nh0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).o99 = function () {
    return this.nh0_1;
  };
  protoOf($serializer_12).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_12).q99 = function (decoder) {
    var tmp0_desc = this.nh0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q9c(tmp0_desc);
    if (tmp6_input.f9d()) {
      tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r9c(tmp0_desc);
    return Part_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_12).ph0 = function (encoder, value) {
    var tmp0_desc = this.nh0_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    tmp1_output.h9e(tmp0_desc, 0, StringSerializer_getInstance(), value.qh0_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_12).p99 = function (encoder, value) {
    return this.ph0(encoder, value instanceof Part ? value : THROW_CCE());
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function Part_init_$Init$(seen1, text, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_12().nh0_1);
    }
    $this.qh0_1 = text;
    $this.rh0_1 = 0;
    return $this;
  }
  function Part_init_$Create$(seen1, text, serializationConstructorMarker) {
    return Part_init_$Init$(seen1, text, serializationConstructorMarker, objectCreate(protoOf(Part)));
  }
  function Companion_11() {
    Companion_instance_13 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.sh0_1 = [new ArrayListSerializer($serializer_getInstance_14())];
  }
  var Companion_instance_13;
  function Companion_getInstance_22() {
    if (Companion_instance_13 == null)
      new Companion_11();
    return Companion_instance_13;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    this.uh0_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('domain.models.NGemini.PromptFeedback', this, 1);
    tmp0_serialDesc.s9j('safetyRatings', false);
    this.th0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).o99 = function () {
    return this.th0_1;
  };
  protoOf($serializer_13).u9j = function () {
    var tmp0_cached = Companion_getInstance_22().sh0_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0])];
  };
  protoOf($serializer_13).q99 = function (decoder) {
    var tmp0_desc = this.th0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp6_input = decoder.q9c(tmp0_desc);
    var tmp7_cached = Companion_getInstance_22().sh0_1;
    if (tmp6_input.f9d()) {
      tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.e9d(tmp0_desc, 0, tmp7_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.r9c(tmp0_desc);
    return PromptFeedback_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_13).vh0 = function (encoder, value) {
    var tmp0_desc = this.th0_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().sh0_1;
    tmp1_output.h9e(tmp0_desc, 0, tmp2_cached[0], value.wh0_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_13).p99 = function (encoder, value) {
    return this.vh0(encoder, value instanceof PromptFeedback ? value : THROW_CCE());
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function PromptFeedback_init_$Init$(seen1, safetyRatings, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_13().th0_1);
    }
    $this.wh0_1 = safetyRatings;
    $this.xh0_1 = 8;
    return $this;
  }
  function PromptFeedback_init_$Create$(seen1, safetyRatings, serializationConstructorMarker) {
    return PromptFeedback_init_$Init$(seen1, safetyRatings, serializationConstructorMarker, objectCreate(protoOf(PromptFeedback)));
  }
  function Companion_12() {
  }
  var Companion_instance_14;
  function Companion_getInstance_23() {
    return Companion_instance_14;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    this.zh0_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('domain.models.NGemini.SafetyRating', this, 2);
    tmp0_serialDesc.s9j('category', false);
    tmp0_serialDesc.s9j('probability', false);
    this.yh0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).o99 = function () {
    return this.yh0_1;
  };
  protoOf($serializer_14).u9j = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  protoOf($serializer_14).q99 = function (decoder) {
    var tmp0_desc = this.yh0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return SafetyRating_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_14).ah1 = function (encoder, value) {
    var tmp0_desc = this.yh0_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    tmp1_output.h9e(tmp0_desc, 0, StringSerializer_getInstance(), value.bh1_1);
    tmp1_output.h9e(tmp0_desc, 1, StringSerializer_getInstance(), value.ch1_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_14).p99 = function (encoder, value) {
    return this.ah1(encoder, value instanceof SafetyRating ? value : THROW_CCE());
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function SafetyRating_init_$Init$(seen1, category, probability, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_14().yh0_1);
    }
    $this.bh1_1 = category;
    $this.ch1_1 = probability;
    $this.dh1_1 = 0;
    return $this;
  }
  function SafetyRating_init_$Create$(seen1, category, probability, serializationConstructorMarker) {
    return SafetyRating_init_$Init$(seen1, category, probability, serializationConstructorMarker, objectCreate(protoOf(SafetyRating)));
  }
  function Candidate(content, finishReason, index, safetyRatings) {
    Companion_getInstance_19();
    this.bh0_1 = content;
    this.ch0_1 = finishReason;
    this.dh0_1 = index;
    this.eh0_1 = safetyRatings;
    this.fh0_1 = 0;
  }
  protoOf(Candidate).toString = function () {
    return 'Candidate(content=' + this.bh0_1 + ', finishReason=' + this.ch0_1 + ', index=' + this.dh0_1 + ', safetyRatings=' + this.eh0_1 + ')';
  };
  protoOf(Candidate).hashCode = function () {
    var result = this.bh0_1 == null ? 0 : this.bh0_1.hashCode();
    result = imul(result, 31) + (this.ch0_1 == null ? 0 : getStringHashCode(this.ch0_1)) | 0;
    result = imul(result, 31) + (this.dh0_1 == null ? 0 : this.dh0_1) | 0;
    result = imul(result, 31) + (this.eh0_1 == null ? 0 : hashCode(this.eh0_1)) | 0;
    return result;
  };
  protoOf(Candidate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Candidate))
      return false;
    var tmp0_other_with_cast = other instanceof Candidate ? other : THROW_CCE();
    if (!equals(this.bh0_1, tmp0_other_with_cast.bh0_1))
      return false;
    if (!(this.ch0_1 == tmp0_other_with_cast.ch0_1))
      return false;
    if (!(this.dh0_1 == tmp0_other_with_cast.dh0_1))
      return false;
    if (!equals(this.eh0_1, tmp0_other_with_cast.eh0_1))
      return false;
    return true;
  };
  function Content(parts, role) {
    Companion_getInstance_20();
    this.kh0_1 = parts;
    this.lh0_1 = role;
    this.mh0_1 = 8;
  }
  protoOf(Content).toString = function () {
    return 'Content(parts=' + this.kh0_1 + ', role=' + this.lh0_1 + ')';
  };
  protoOf(Content).hashCode = function () {
    var result = this.kh0_1 == null ? 0 : hashCode(this.kh0_1);
    result = imul(result, 31) + (this.lh0_1 == null ? 0 : getStringHashCode(this.lh0_1)) | 0;
    return result;
  };
  protoOf(Content).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Content))
      return false;
    var tmp0_other_with_cast = other instanceof Content ? other : THROW_CCE();
    if (!equals(this.kh0_1, tmp0_other_with_cast.kh0_1))
      return false;
    if (!(this.lh0_1 == tmp0_other_with_cast.lh0_1))
      return false;
    return true;
  };
  function Part(text) {
    this.qh0_1 = text;
    this.rh0_1 = 0;
  }
  protoOf(Part).toString = function () {
    return 'Part(text=' + this.qh0_1 + ')';
  };
  protoOf(Part).hashCode = function () {
    return this.qh0_1 == null ? 0 : getStringHashCode(this.qh0_1);
  };
  protoOf(Part).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Part))
      return false;
    var tmp0_other_with_cast = other instanceof Part ? other : THROW_CCE();
    if (!(this.qh0_1 == tmp0_other_with_cast.qh0_1))
      return false;
    return true;
  };
  function PromptFeedback(safetyRatings) {
    Companion_getInstance_22();
    this.wh0_1 = safetyRatings;
    this.xh0_1 = 8;
  }
  protoOf(PromptFeedback).toString = function () {
    return 'PromptFeedback(safetyRatings=' + this.wh0_1 + ')';
  };
  protoOf(PromptFeedback).hashCode = function () {
    return this.wh0_1 == null ? 0 : hashCode(this.wh0_1);
  };
  protoOf(PromptFeedback).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PromptFeedback))
      return false;
    var tmp0_other_with_cast = other instanceof PromptFeedback ? other : THROW_CCE();
    if (!equals(this.wh0_1, tmp0_other_with_cast.wh0_1))
      return false;
    return true;
  };
  function SafetyRating(category, probability) {
    this.bh1_1 = category;
    this.ch1_1 = probability;
    this.dh1_1 = 0;
  }
  protoOf(SafetyRating).toString = function () {
    return 'SafetyRating(category=' + this.bh1_1 + ', probability=' + this.ch1_1 + ')';
  };
  protoOf(SafetyRating).hashCode = function () {
    var result = this.bh1_1 == null ? 0 : getStringHashCode(this.bh1_1);
    result = imul(result, 31) + (this.ch1_1 == null ? 0 : getStringHashCode(this.ch1_1)) | 0;
    return result;
  };
  protoOf(SafetyRating).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SafetyRating))
      return false;
    var tmp0_other_with_cast = other instanceof SafetyRating ? other : THROW_CCE();
    if (!(this.bh1_1 == tmp0_other_with_cast.bh1_1))
      return false;
    if (!(this.ch1_1 == tmp0_other_with_cast.ch1_1))
      return false;
    return true;
  };
  function Companion_13() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.eh1_1 = [new ArrayListSerializer($serializer_getInstance_10()), null];
  }
  var Companion_instance_15;
  function Companion_getInstance_24() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    this.gh1_1 = 0;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('domain.models.NGemini', this, 2);
    tmp0_serialDesc.s9j('candidates', false);
    tmp0_serialDesc.s9j('promptFeedback', false);
    this.fh1_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).o99 = function () {
    return this.fh1_1;
  };
  protoOf($serializer_15).u9j = function () {
    var tmp0_cached = Companion_getInstance_24().eh1_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0]), get_nullable($serializer_getInstance_13())];
  };
  protoOf($serializer_15).q99 = function (decoder) {
    var tmp0_desc = this.fh1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp7_input = decoder.q9c(tmp0_desc);
    var tmp8_cached = Companion_getInstance_24().eh1_1;
    if (tmp7_input.f9d()) {
      tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, $serializer_getInstance_13(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.g9d(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.e9d(tmp0_desc, 0, tmp8_cached[0], tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.e9d(tmp0_desc, 1, $serializer_getInstance_13(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.r9c(tmp0_desc);
    return NGemini_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_15).hh1 = function (encoder, value) {
    var tmp0_desc = this.fh1_1;
    var tmp1_output = encoder.q9c(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().eh1_1;
    tmp1_output.h9e(tmp0_desc, 0, tmp2_cached[0], value.ih1_1);
    tmp1_output.h9e(tmp0_desc, 1, $serializer_getInstance_13(), value.jh1_1);
    tmp1_output.r9c(tmp0_desc);
  };
  protoOf($serializer_15).p99 = function (encoder, value) {
    return this.hh1(encoder, value instanceof NGemini ? value : THROW_CCE());
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function NGemini_init_$Init$(seen1, candidates, promptFeedback, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_15().fh1_1);
    }
    $this.ih1_1 = candidates;
    $this.jh1_1 = promptFeedback;
    $this.kh1_1 = 0;
    return $this;
  }
  function NGemini_init_$Create$(seen1, candidates, promptFeedback, serializationConstructorMarker) {
    return NGemini_init_$Init$(seen1, candidates, promptFeedback, serializationConstructorMarker, objectCreate(protoOf(NGemini)));
  }
  function NGemini(candidates, promptFeedback) {
    Companion_getInstance_24();
    this.ih1_1 = candidates;
    this.jh1_1 = promptFeedback;
    this.kh1_1 = 0;
  }
  protoOf(NGemini).toString = function () {
    return 'NGemini(candidates=' + this.ih1_1 + ', promptFeedback=' + this.jh1_1 + ')';
  };
  protoOf(NGemini).hashCode = function () {
    var result = this.ih1_1 == null ? 0 : hashCode(this.ih1_1);
    result = imul(result, 31) + (this.jh1_1 == null ? 0 : this.jh1_1.hashCode()) | 0;
    return result;
  };
  protoOf(NGemini).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NGemini))
      return false;
    var tmp0_other_with_cast = other instanceof NGemini ? other : THROW_CCE();
    if (!equals(this.ih1_1, tmp0_other_with_cast.ih1_1))
      return false;
    if (!equals(this.jh1_1, tmp0_other_with_cast.jh1_1))
      return false;
    return true;
  };
  function NGeminiRepository() {
  }
  function IGetContentUseCase() {
  }
  function $getContentWithImageCOROUTINE$4(_this__u8e3s4, content, images, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uh1_1 = _this__u8e3s4;
    this.vh1_1 = content;
    this.wh1_1 = images;
  }
  protoOf($getContentWithImageCOROUTINE$4).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 4;
            println('image size: ' + this.wh1_1);
            var this_0 = this.wh1_1;
            if (this_0 == null ? true : this_0.u()) {
              this.cc_1 = 2;
              suspendResult = this.uh1_1.yh1_1.hgz(this.vh1_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cc_1 = 1;
              suspendResult = this.uh1_1.yh1_1.igz(this.vh1_1, this.wh1_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.xh1_1 = suspendResult;
            this.cc_1 = 3;
            continue $sm;
          case 2:
            this.xh1_1 = suspendResult;
            this.cc_1 = 3;
            continue $sm;
          case 3:
            return this.xh1_1;
          case 4:
            throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.dc_1 === 4) {
          throw e;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e;
        }
      }
     while (true);
  };
  function GetContentUseCase(nGeminiRepository) {
    this.yh1_1 = nGeminiRepository;
    this.zh1_1 = 8;
  }
  protoOf(GetContentUseCase).lh1 = function (content, images, $completion) {
    var tmp = new $getContentWithImageCOROUTINE$4(this, content, images, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function ComposableSingletons$BottomFieldsKt$lambda_1$lambda_yzwvjc($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(-552522693, $changed, -1, 'ui.compsoable.ComposableSingletons$BottomFieldsKt.lambda-1.<anonymous> (BottomFields.kt:85)');
      }
      var tmp0_color = MaterialTheme_instance.cep($composer_0, 6).aev();
      var tmp1_overflow = Companion_getInstance_2().i4j_1;
      var tmp = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      Text$composable('Message NGemini.....', null, tmp0_color, tmp, null, null, null, tmp_0, null, null, tmp_1, tmp1_overflow, false, 2, 0, null, null, $composer_0, 6, 3120, 120826);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    return Unit_instance;
  }
  function ComposableSingletons$BottomFieldsKt() {
    ComposableSingletons$BottomFieldsKt_instance = this;
    var tmp = this;
    tmp.ah2_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-552522693, false, ComposableSingletons$BottomFieldsKt$lambda_1$lambda_yzwvjc));
  }
  var ComposableSingletons$BottomFieldsKt_instance;
  function ComposableSingletons$BottomFieldsKt_getInstance() {
    if (ComposableSingletons$BottomFieldsKt_instance == null)
      new ComposableSingletons$BottomFieldsKt();
    return ComposableSingletons$BottomFieldsKt_instance;
  }
  function BottomFields$composable(modifier, chatUiState, onSendClick, imagePicker, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(-808522682);
    var $dirty = $changed;
    if (!(($default & 1) === 0)) {
      modifier_0._v = fillMaxWidth(Companion_instance_0);
    }
    if (isTraceInProgress()) {
      traceEventStart(-808522682, $dirty, -1, 'ui.compsoable.BottomFields$composable (BottomFields.kt:46)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.h1i(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = $composer_1.t1k();
    var tmp;
    if (false ? true : it === Companion_getInstance_3().v1j_1) {
      // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>' call
      var value = mutableStateOf('');
      $composer_1.u1k(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    $composer_1.j1i();
    var message$delegate = tmp0;
    var keyboardController = LocalSoftwareKeyboardController_getInstance().v7c($composer_0, 6);
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var this_0 = get_LocalFocusManager();
    var $composer_2 = $composer_0;
    sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0_0 = $composer_2.d1l(this_0);
    sourceInformationMarkerEnd($composer_2);
    var focusManager = tmp0_0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_3 = $composer_0;
    $composer_3.h1i(547886695);
    sourceInformation($composer_3, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_0 = $composer_3.t1k();
    var tmp_1;
    if (false ? true : it_0 === Companion_getInstance_3().v1j_1) {
      // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>' call
      var value_0 = mutableStateListOf();
      $composer_3.u1k(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = it_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    $composer_3.j1i();
    var images = tmp0_1;
    $composer_0.h1i(-195414161);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_1 = $composer_0;
    var invalid = $composer_0.v1k(images);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_1 = this_1.t1k();
    var tmp_3;
    if (invalid ? true : it_1 === Companion_getInstance_3().v1j_1) {
      // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>' call
      var value_1 = BottomFields$composable$lambda_1(images);
      this_1.u1k(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var tmp_4 = tmp_3;
    var tmpCache = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
    $composer_0.j1i();
    imagePicker.dh2(tmpCache, $composer_0, 64);
    // Inline function 'androidx.compose.foundation.layout.Box$composable' call
    var $changed_0 = 14 & $dirty;
    var modifier_1 = modifier_0._v;
    var contentAlignment = null;
    var propagateMinConstraints = false;
    var $composer_4 = $composer_0;
    $composer_4.h1i(1330882304);
    sourceInformation($composer_4, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
    if (!((6 & 1) === 0))
      modifier_1 = Companion_instance_0;
    if (!((6 & 2) === 0))
      contentAlignment = Companion_getInstance_4().a53_1;
    if (!((6 & 4) === 0))
      propagateMinConstraints = false;
    var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_4, 14 & $changed_0 >> 3 | 112 & $changed_0 >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var modifier_2 = modifier_1;
    var $changed_1 = 112 & $changed_0 << 3;
    var modifier_3 = modifier_2;
    var $composer_5 = $composer_4;
    $composer_5.h1i(1725976829);
    sourceInformation($composer_5, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_3 = Companion_instance_0;
    var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_5, 0);
    var localMap = $composer_5.c1l();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var factory = Companion_getInstance_5().w6f_1;
    var skippableUpdate = materializerOf(modifier_3);
    var $changed_2 = 6 | 7168 & $changed_1 << 9;
    var $composer_6 = $composer_5;
    var tmp_5 = $composer_6.w1j();
    if (!isInterface(tmp_5, Applier)) {
      invalidApplier();
    }
    $composer_6.m1k();
    if ($composer_6.x1j()) {
      $composer_6.n1k(factory);
    } else {
      $composer_6.o1k();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_6);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().b6g_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().a6g_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block = Companion_getInstance_5().e6g_1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
    var tmp_6;
    if ($this$with.x1j() ? true : !equals($this$with.t1k(), compositeKeyHash)) {
      $this$with.u1k(compositeKeyHash);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).s1k(compositeKeyHash, block);
      tmp_6 = Unit_instance;
    }
    skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_6)), $composer_6, 112 & $changed_2 >> 3);
    $composer_6.h1i(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
    var $composer_7 = $composer_6;
    sourceInformationMarkerStart($composer_7, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
    // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>' call
    var $composer_8 = $composer_7;
    var tmp0_horizontalAlignment = Companion_getInstance_4().n53_1;
    // Inline function 'androidx.compose.foundation.layout.Column$composable' call
    var modifier_4 = null;
    var verticalArrangement = Arrangement_getInstance().har_1;
    var horizontalAlignment = tmp0_horizontalAlignment;
    var $composer_9 = $composer_8;
    $composer_9.h1i(860130704);
    sourceInformation($composer_9, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
    if (!((1 & 1) === 0))
      modifier_4 = Companion_instance_0;
    if (!((1 & 2) === 0))
      verticalArrangement = Arrangement_getInstance().far_1;
    if (!((1 & 4) === 0))
      horizontalAlignment = Companion_getInstance_4().m53_1;
    var measurePolicy_0 = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_9, 14 & 432 >> 3 | 112 & 432 >> 3);
    // Inline function 'androidx.compose.ui.layout.Layout$composable' call
    var modifier_5 = modifier_4;
    var $changed_3 = 112 & 432 << 3;
    var modifier_6 = modifier_5;
    var $composer_10 = $composer_9;
    $composer_10.h1i(1725976829);
    sourceInformation($composer_10, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
    if (!((0 & 2) === 0))
      modifier_6 = Companion_instance_0;
    var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_10, 0);
    var localMap_0 = $composer_10.c1l();
    // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
    var factory_0 = Companion_getInstance_5().w6f_1;
    var skippableUpdate_0 = materializerOf(modifier_6);
    var $changed_4 = 6 | 7168 & $changed_3 << 9;
    var $composer_11 = $composer_10;
    var tmp_7 = $composer_11.w1j();
    if (!isInterface(tmp_7, Applier)) {
      invalidApplier();
    }
    $composer_11.m1k();
    if ($composer_11.x1j()) {
      $composer_11.n1k(factory_0);
    } else {
      $composer_11.o1k();
    }
    // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
    var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_11);
    Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_5().b6g_1);
    Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_5().a6g_1);
    // Inline function 'androidx.compose.runtime.Updater.set' call
    var block_0 = Companion_getInstance_5().e6g_1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
    var tmp_8;
    if ($this$with_0.x1j() ? true : !equals($this$with_0.t1k(), compositeKeyHash_0)) {
      $this$with_0.u1k(compositeKeyHash_0);
      _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).s1k(compositeKeyHash_0, block_0);
      tmp_8 = Unit_instance;
    }
    skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_11)), $composer_11, 112 & $changed_4 >> 3);
    $composer_11.h1i(2058660585);
    // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
    var $composer_12 = $composer_11;
    sourceInformationMarkerStart($composer_12, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
    // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>' call
    var $composer_13 = $composer_12;
    ImageList$composable(null, images, $composer_13, 0, 1);
    var tmp3_value = BottomFields$composable$lambda(message$delegate);
    var tmp4_modifier = fillMaxWidth(modifier_0._v);
    var tmp5_keyboardOptions = Companion_getInstance_6().sdk_1.idt(VOID, VOID, VOID, Companion_getInstance_7().l4u_1);
    var tmp6_keyboardActions = new KeyboardActions(VOID, VOID, VOID, VOID, VOID, BottomFields$composable$lambda_2(images, onSendClick, focusManager, keyboardController, message$delegate));
    var tmp0_fontSize = get_sp(18);
    var tmp1_fontFamily = MaterialTheme_instance.yep($composer_13, 6).aey_1.b4k();
    var tmp2_color = MaterialTheme_instance.cep($composer_13, 6).ret();
    var tmp7_textStyle = TextStyle_init_$Create$(tmp2_color, tmp0_fontSize, VOID, VOID, VOID, tmp1_fontFamily);
    var tmp_9 = TextFieldDefaults_getInstance();
    var tmp_10 = MaterialTheme_instance.cep($composer_13, 6).ret();
    var tmp_11 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_12 = MaterialTheme_instance.cep($composer_13, 6).pet();
    var tmp_13 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_14 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_15 = MaterialTheme_instance.cep($composer_13, 6).bet();
    var tmp_16 = MaterialTheme_instance.cep($composer_13, 6).bet();
    var tmp_17 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_18 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_19 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_20 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_21 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_22 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_23 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_24 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_25 = MaterialTheme_instance.cep($composer_13, 6).bet();
    var tmp_26 = MaterialTheme_instance.cep($composer_13, 6).bet();
    var tmp_27 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_28 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp_29 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
    var tmp8_colors = tmp_9.sgd(tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, tmp_29, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_13, 0, 0, 48, 1998746);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_30 = _Dp___init__impl__ms3zkb(16);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$20 = _Dp___init__impl__ms3zkb(16);
    var tmp9_shape = RoundedCornerShape(tmp_30, tmp$ret$20);
    $composer_13.h1i(-195413747);
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = $composer_13.v1k(message$delegate);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_2 = $composer_13.t1k();
    var tmp_31;
    if (invalid_0 ? true : it_2 === Companion_getInstance_3().v1j_1) {
      // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>.<anonymous>' call
      var value_2 = BottomFields$composable$lambda_3(message$delegate);
      $composer_13.u1k(value_2);
      tmp_31 = value_2;
    } else {
      tmp_31 = it_2;
    }
    var tmp_32 = tmp_31;
    var tmpCache_0 = (tmp_32 == null ? true : !(tmp_32 == null)) ? tmp_32 : THROW_CCE();
    $composer_13.j1i();
    var tmp_33 = ComposableSingletons$BottomFieldsKt_getInstance().ah2_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>.<anonymous>' call
    var tmp_34 = $composer_13;
    var dispatchReceiver = composableLambda(tmp_34, -106985382, true, BottomFields$composable$lambda_4(imagePicker));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_14 = $composer_13;
    $composer_14.h1i(-838505973);
    sourceInformation($composer_14, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_1 = $composer_14.v1k(dispatchReceiver);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_3 = $composer_14.t1k();
    var tmp_35;
    if (invalid_1 ? true : it_3 === Companion_getInstance_3().v1j_1) {
      // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var value_3 = ComposableLambda$invoke$ref_1(dispatchReceiver);
      $composer_14.u1k(value_3);
      tmp_35 = value_3;
    } else {
      tmp_35 = it_3;
    }
    var tmp_36 = tmp_35;
    var tmp0_2 = (tmp_36 == null ? true : !(tmp_36 == null)) ? tmp_36 : THROW_CCE();
    $composer_14.j1i();
    var tmp_37 = tmp0_2;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>.<anonymous>' call
    var tmp_38 = $composer_13;
    var dispatchReceiver_0 = composableLambda(tmp_38, 338551929, true, BottomFields$composable$lambda_5(chatUiState, images, onSendClick, focusManager, keyboardController, message$delegate));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_15 = $composer_13;
    $composer_15.h1i(-838505973);
    sourceInformation($composer_15, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_2 = $composer_15.v1k(dispatchReceiver_0);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it_4 = $composer_15.t1k();
    var tmp_39;
    if (invalid_2 ? true : it_4 === Companion_getInstance_3().v1j_1) {
      // Inline function 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      var value_4 = ComposableLambda$invoke$ref_2(dispatchReceiver_0);
      $composer_15.u1k(value_4);
      tmp_39 = value_4;
    } else {
      tmp_39 = it_4;
    }
    var tmp_40 = tmp_39;
    var tmp0_3 = (tmp_40 == null ? true : !(tmp_40 == null)) ? tmp_40 : THROW_CCE();
    $composer_15.j1i();
    var tmp_41 = tmp0_3;
    OutlinedTextField$composable(tmp3_value, tmpCache_0, tmp4_modifier, false, false, tmp7_textStyle, null, tmp_33, tmp_37, tmp_41, false, null, tmp5_keyboardOptions, tmp6_keyboardActions, false, 0, 0, null, tmp9_shape, tmp8_colors, $composer_13, 918552576, 0, 248920);
    sourceInformationMarkerEnd($composer_12);
    $composer_11.j1i();
    $composer_11.p1k();
    $composer_10.j1i();
    $composer_9.j1i();
    sourceInformationMarkerEnd($composer_7);
    $composer_6.j1i();
    $composer_6.p1k();
    $composer_5.j1i();
    $composer_4.j1i();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(BottomFields$composable$lambda_6(modifier_0, chatUiState, onSendClick, imagePicker, $changed, $default));
    }
  }
  function BottomFields$composable$lambda($message$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('message', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $message$delegate.t2();
  }
  function BottomFields$composable$lambda_0($message$delegate, value) {
    getLocalDelegateReference('message', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $message$delegate.s19(value);
    return Unit_instance;
  }
  function BottomFields$composable$lambda_1($images) {
    return function (it) {
      $images.i2c(it);
      return Unit_instance;
    };
  }
  function BottomFields$composable$lambda_2($images, $onSendClick, $focusManager, $keyboardController, $message$delegate) {
    return function ($this$$receiver) {
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = BottomFields$composable$lambda($message$delegate);
      if (charSequenceLength(this_0) > 0) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !$images.u();
      }
      if (tmp_0) {
        $onSendClick(BottomFields$composable$lambda($message$delegate), $images);
        BottomFields$composable$lambda_0($message$delegate, '');
        $focusManager.y5g();
        var tmp0_safe_receiver = $keyboardController;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.x7c();
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BottomFields$composable$lambda_3($message$delegate) {
    return function (it) {
      BottomFields$composable$lambda_0($message$delegate, it);
      return Unit_instance;
    };
  }
  function BottomFields$composable$lambda$lambda($imagePicker) {
    return function () {
      $imagePicker.eh2();
      return Unit_instance;
    };
  }
  function BottomFields$composable$lambda_4($imagePicker) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(-106985382, $changed, -1, 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>.<anonymous> (BottomFields.kt:93)');
        }
        var tmp_0 = Companion_instance_0;
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$0 = _Dp___init__impl__ms3zkb(32);
        var tmp_1 = size(tmp_0, tmp$ret$0);
        var tmp0_modifier = clickable(tmp_1, VOID, VOID, VOID, BottomFields$composable$lambda$lambda($imagePicker));
        var tmp1_imageVector = get_Attachment(Icons_getInstance().leo_1);
        var tmp2_tint = MaterialTheme_instance.cep($composer_0, 6).bet();
        Icon$composable(tmp1_imageVector, 'Attachment', tmp0_modifier, tmp2_tint, $composer_0, 48, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp = tmp_2;
      } else {
        $composer_0.j1k();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function BottomFields$composable$lambda$lambda_0($images, $onSendClick, $focusManager, $keyboardController, $message$delegate) {
    return function () {
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = BottomFields$composable$lambda($message$delegate);
      if (charSequenceLength(this_0) > 0) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_0 = !$images.u();
      }
      if (tmp_0) {
        $onSendClick(BottomFields$composable$lambda($message$delegate), $images);
        BottomFields$composable$lambda_0($message$delegate, '');
        $images.h1();
        $focusManager.y5g();
        var tmp0_safe_receiver = $keyboardController;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.x7c();
        }
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BottomFields$composable$lambda_5($chatUiState, $images, $onSendClick, $focusManager, $keyboardController, $message$delegate) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(338551929, $changed, -1, 'ui.compsoable.BottomFields$composable.<anonymous>.<anonymous>.<anonymous> (BottomFields.kt:104)');
        }
        if ($chatUiState.gh2_1) {
          $composer_0.h1i(1655849141);
          LoadingIcon$composable($chatUiState.gh2_1, $composer_0, 0);
          $composer_0.j1i();
        } else {
          $composer_0.h1i(1655849245);
          var tmp_0 = Companion_instance_0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$0 = _Dp___init__impl__ms3zkb(32);
          var tmp_1 = size(tmp_0, tmp$ret$0);
          var tmp0_modifier = clickable(tmp_1, VOID, VOID, VOID, BottomFields$composable$lambda$lambda_0($images, $onSendClick, $focusManager, $keyboardController, $message$delegate));
          var tmp1_imageVector = get_Send(Icons_getInstance().leo_1);
          var tmp_2;
          var tmp_3;
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_0 = BottomFields$composable$lambda($message$delegate);
          if (charSequenceLength(this_0) > 0) {
            tmp_3 = true;
          } else {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_3 = !$images.u();
          }
          if (tmp_3) {
            $composer_0.h1i(1655850225);
            var tmp0_group = MaterialTheme_instance.cep($composer_0, 6).bet();
            $composer_0.j1i();
            tmp_2 = tmp0_group;
          } else {
            $composer_0.h1i(1655850264);
            var tmp1_group = MaterialTheme_instance.cep($composer_0, 6).aev();
            $composer_0.j1i();
            tmp_2 = tmp1_group;
          }
          var tmp2_tint = tmp_2;
          Icon$composable(tmp1_imageVector, 'Send', tmp0_modifier, tmp2_tint, $composer_0, 48, 0);
          $composer_0.j1i();
        }
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.j1k();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function BottomFields$composable$lambda_6($modifier, $chatUiState, $onSendClick, $imagePicker, $$changed, $$default) {
    return function ($composer, $force) {
      BottomFields$composable($modifier._v, $chatUiState, $onSendClick, $imagePicker, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ChatMessageItem$composable(modifier, chatUiState, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(-387160125);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v1k(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.v1k(chatUiState) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.y1j()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (isTraceInProgress()) {
        traceEventStart(-387160125, $dirty, -1, 'ui.compsoable.ChatMessageItem$composable (ChatMessageItem.kt:26)');
      }
      var listState = rememberLazyListState$composable(0, 0, $composer_0, 0, 3);
      $composer_0.h1i(-789607455);
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!chatUiState.fh2_1.u()) {
        LaunchedEffect$composable(chatUiState.fh2_1, ChatMessageItem$composable$slambda_0(listState, chatUiState, null), $composer_0, 0);
      }
      $composer_0.j1i();
      var tmp0_modifier = fillMaxWidth(modifier_0._v);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
      var tmp1_contentPadding = PaddingValues(tmp$ret$1);
      var tmp = Arrangement_getInstance();
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(12);
      var tmp2_verticalArrangement = tmp.war(tmp$ret$2);
      LazyColumn$composable(tmp0_modifier, listState, tmp1_contentPadding, false, tmp2_verticalArrangement, null, null, false, ChatMessageItem$composable$lambda(chatUiState), $composer_0, 24960, 232);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(ChatMessageItem$composable$lambda_0(modifier_0, chatUiState, $changed, $default));
    }
  }
  function ChatMessageItem$composable$slambda($listState, $chatUiState, resultContinuation) {
    this.th2_1 = $listState;
    this.uh2_1 = $chatUiState;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChatMessageItem$composable$slambda).m22 = function ($this$LaunchedEffect, $completion) {
    var tmp = this.n22($this$LaunchedEffect, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(ChatMessageItem$composable$slambda).ad = function (p1, $completion) {
    return this.m22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChatMessageItem$composable$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 2;
            this.cc_1 = 1;
            suspendResult = this.th2_1.id9(get_lastIndex(this.uh2_1.fh2_1), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.fc_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.dc_1 === 2) {
          throw e;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e;
        }
      }
     while (true);
  };
  protoOf(ChatMessageItem$composable$slambda).n22 = function ($this$LaunchedEffect, completion) {
    var i = new ChatMessageItem$composable$slambda(this.th2_1, this.uh2_1, completion);
    i.vh2_1 = $this$LaunchedEffect;
    return i;
  };
  function ChatMessageItem$composable$slambda_0($listState, $chatUiState, resultContinuation) {
    var i = new ChatMessageItem$composable$slambda($listState, $chatUiState, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.m22($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p2t(p0, p1, p2, p3);
    };
  }
  function ChatMessageItem$composable$lambda$lambda($chatUiState) {
    return function ($this$items, it, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.x1k(it) ? 32 : 16);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 721) === 144) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(971175916, $dirty, -1, 'ui.compsoable.ChatMessageItem$composable.<anonymous>.<anonymous> (ChatMessageItem.kt:40)');
        }
        var message = $chatUiState.fh2_1.n(it);
        if (!(message == null)) {
          // Inline function 'androidx.compose.foundation.layout.Box$composable' call
          var tmp_1 = fillMaxWidth(Companion_instance_0);
          var tmp_2;
          if (message.ugz()) {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_2 = _Dp___init__impl__ms3zkb(64);
          } else {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_2 = _Dp___init__impl__ms3zkb(0);
          }
          var tmp_3 = tmp_2;
          var tmp_4;
          if (message.ugz()) {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_4 = _Dp___init__impl__ms3zkb(0);
          } else {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_4 = _Dp___init__impl__ms3zkb(64);
          }
          var modifier = padding(tmp_1, tmp_3, VOID, tmp_4);
          var contentAlignment = message.ugz() ? Companion_getInstance_4().f53_1 : Companion_getInstance_4().d53_1;
          var propagateMinConstraints = false;
          var $composer_1 = $composer_0;
          $composer_1.h1i(1330882304);
          sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
          if (!((4 & 1) === 0))
            modifier = Companion_instance_0;
          if (!((4 & 2) === 0))
            contentAlignment = Companion_getInstance_4().a53_1;
          if (!((4 & 4) === 0))
            propagateMinConstraints = false;
          var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 14 & 0 >> 3 | 112 & 0 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var modifier_0 = modifier;
          var $changed_0 = 112 & 0 << 3;
          var modifier_1 = modifier_0;
          var $composer_2 = $composer_1;
          $composer_2.h1i(1725976829);
          sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_1 = Companion_instance_0;
          var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
          var localMap = $composer_2.c1l();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var factory = Companion_getInstance_5().w6f_1;
          var skippableUpdate = materializerOf(modifier_1);
          var $changed_1 = 6 | 7168 & $changed_0 << 9;
          var $composer_3 = $composer_2;
          var tmp_5 = $composer_3.w1j();
          if (!isInterface(tmp_5, Applier)) {
            invalidApplier();
          }
          $composer_3.m1k();
          if ($composer_3.x1j()) {
            $composer_3.n1k(factory);
          } else {
            $composer_3.o1k();
          }
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().b6g_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().a6g_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block = Companion_getInstance_5().e6g_1;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
          var tmp_6;
          if ($this$with.x1j() ? true : !equals($this$with.t1k(), compositeKeyHash)) {
            $this$with.u1k(compositeKeyHash);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).s1k(compositeKeyHash, block);
            tmp_6 = Unit_instance;
          }
          skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
          $composer_3.h1i(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
          var $composer_4 = $composer_3;
          sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
          // Inline function 'ui.compsoable.ChatMessageItem$composable.<anonymous>.<anonymous>.<anonymous>' call
          var $composer_5 = $composer_4;
          // Inline function 'androidx.compose.foundation.layout.Box$composable' call
          var tmp_7 = Companion_instance_0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp0_topStart = _Dp___init__impl__ms3zkb(24);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp1_topEnd = _Dp___init__impl__ms3zkb(24);
          var tmp_8;
          if (message.ugz()) {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_8 = _Dp___init__impl__ms3zkb(24);
          } else {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_8 = _Dp___init__impl__ms3zkb(0);
          }
          var tmp2_bottomStart = tmp_8;
          var tmp_9;
          if (message.ugz()) {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_9 = _Dp___init__impl__ms3zkb(0);
          } else {
            // Inline function 'androidx.compose.ui.unit.dp' call
            tmp_9 = _Dp___init__impl__ms3zkb(24);
          }
          var tmp3_bottomEnd = tmp_9;
          var tmp_10 = background(clip(tmp_7, RoundedCornerShape(tmp0_topStart, tmp1_topEnd, tmp3_bottomEnd, tmp2_bottomStart)), MaterialTheme_instance.cep($composer_5, 6).xet());
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$12 = _Dp___init__impl__ms3zkb(16);
          var modifier_2 = padding_0(tmp_10, tmp$ret$12);
          var contentAlignment_0 = message.ugz() ? Companion_getInstance_4().f53_1 : Companion_getInstance_4().d53_1;
          var propagateMinConstraints_0 = false;
          var $composer_6 = $composer_5;
          $composer_6.h1i(1330882304);
          sourceInformation($composer_6, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
          if (!((4 & 1) === 0))
            modifier_2 = Companion_instance_0;
          if (!((4 & 2) === 0))
            contentAlignment_0 = Companion_getInstance_4().a53_1;
          if (!((4 & 4) === 0))
            propagateMinConstraints_0 = false;
          var measurePolicy_0 = rememberBoxMeasurePolicy$composable(contentAlignment_0, propagateMinConstraints_0, $composer_6, 14 & 0 >> 3 | 112 & 0 >> 3);
          // Inline function 'androidx.compose.ui.layout.Layout$composable' call
          var modifier_3 = modifier_2;
          var $changed_2 = 112 & 0 << 3;
          var modifier_4 = modifier_3;
          var $composer_7 = $composer_6;
          $composer_7.h1i(1725976829);
          sourceInformation($composer_7, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
          if (!((0 & 2) === 0))
            modifier_4 = Companion_instance_0;
          var compositeKeyHash_0 = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_7, 0);
          var localMap_0 = $composer_7.c1l();
          // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
          var factory_0 = Companion_getInstance_5().w6f_1;
          var skippableUpdate_0 = materializerOf(modifier_4);
          var $changed_3 = 6 | 7168 & $changed_2 << 9;
          var $composer_8 = $composer_7;
          var tmp_11 = $composer_8.w1j();
          if (!isInterface(tmp_11, Applier)) {
            invalidApplier();
          }
          $composer_8.m1k();
          if ($composer_8.x1j()) {
            $composer_8.n1k(factory_0);
          } else {
            $composer_8.o1k();
          }
          // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
          var $this$ReusableComposeNode_0 = _Updater___init__impl__rbfxm8($composer_8);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, measurePolicy_0, Companion_getInstance_5().b6g_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode_0, localMap_0, Companion_getInstance_5().a6g_1);
          // Inline function 'androidx.compose.runtime.Updater.set' call
          var block_0 = Companion_getInstance_5().e6g_1;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          var $this$with_0 = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0);
          var tmp_12;
          if ($this$with_0.x1j() ? true : !equals($this$with_0.t1k(), compositeKeyHash_0)) {
            $this$with_0.u1k(compositeKeyHash_0);
            _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode_0).s1k(compositeKeyHash_0, block_0);
            tmp_12 = Unit_instance;
          }
          skippableUpdate_0(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_8)), $composer_8, 112 & $changed_3 >> 3);
          $composer_8.h1i(2058660585);
          // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
          var $composer_9 = $composer_8;
          sourceInformationMarkerStart($composer_9, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
          // Inline function 'ui.compsoable.ChatMessageItem$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var $composer_10 = $composer_9;
          // Inline function 'kotlin.text.trim' call
          var this_0 = message.ngz_1;
          var tmp_13 = toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
          var tmp_14 = MaterialTheme_instance.cep($composer_10, 6).zet();
          var tmp_15 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_16 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_17 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
          var tmp_18 = _TextOverflow___init__impl__obguoe(0);
          Text$composable_0(tmp_13, null, tmp_14, tmp_15, null, null, null, tmp_16, null, null, tmp_17, tmp_18, false, 0, 0, null, null, $composer_10, 0, 0, 131066);
          sourceInformationMarkerEnd($composer_9);
          $composer_8.j1i();
          $composer_8.p1k();
          $composer_7.j1i();
          $composer_6.j1i();
          sourceInformationMarkerEnd($composer_4);
          $composer_3.j1i();
          $composer_3.p1k();
          $composer_2.j1i();
          $composer_1.j1i();
        }
        var tmp_19;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_19 = Unit_instance;
        }
        tmp_0 = tmp_19;
      } else {
        $composer_0.j1k();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ChatMessageItem$composable$lambda($chatUiState) {
    return function ($this$LazyColumn) {
      var tmp = $chatUiState.fh2_1.m();
      $this$LazyColumn.bd0(tmp, VOID, VOID, ComposableLambda$invoke$ref_3(composableLambdaInstance(971175916, true, ChatMessageItem$composable$lambda$lambda($chatUiState))));
      return Unit_instance;
    };
  }
  function ChatMessageItem$composable$lambda_0($modifier, $chatUiState, $$changed, $$default) {
    return function ($composer, $force) {
      ChatMessageItem$composable($modifier._v, $chatUiState, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o2t(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoadingIconKt$lambda_1$lambda_o1dzrp($this$AnimatedVisibility, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(-1168422335, $changed, -1, 'ui.compsoable.ComposableSingletons$LoadingIconKt.lambda-1.<anonymous> (LoadingIcon.kt:20)');
      }
      var tmp = Companion_instance_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(36);
      var tmp_0 = size(tmp, tmp$ret$0);
      var tmp_1 = MaterialTheme_instance.cep($composer_0, 6).bet();
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      CircularProgressIndicator$composable(tmp_0, tmp_1, tmp_2, tmp_3, _StrokeCap___init__impl__kfgr27(0), $composer_0, 6, 28);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    return Unit_instance;
  }
  function ComposableSingletons$LoadingIconKt() {
    ComposableSingletons$LoadingIconKt_instance = this;
    var tmp = this;
    tmp.wh2_1 = ComposableLambda$invoke$ref_4(composableLambdaInstance(-1168422335, false, ComposableSingletons$LoadingIconKt$lambda_1$lambda_o1dzrp));
  }
  var ComposableSingletons$LoadingIconKt_instance;
  function ComposableSingletons$LoadingIconKt_getInstance() {
    if (ComposableSingletons$LoadingIconKt_instance == null)
      new ComposableSingletons$LoadingIconKt();
    return ComposableSingletons$LoadingIconKt_instance;
  }
  function LoadingIcon$composable(state, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(1749521158);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.w1k(state) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(1749521158, $dirty, -1, 'ui.compsoable.LoadingIcon$composable (LoadingIcon.kt:13)');
      }
      var tmp = fadeIn();
      var tmp_0 = fadeOut();
      AnimatedVisibility$composable(state, null, tmp, tmp_0, null, ComposableSingletons$LoadingIconKt_getInstance().wh2_1, $composer_0, 200064 | 14 & $dirty, 18);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(LoadingIcon$composable$lambda(state, $changed));
    }
  }
  function LoadingIcon$composable$lambda($state, $$changed) {
    return function ($composer, $force) {
      LoadingIcon$composable($state, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ImageList$composable(modifier, images, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(1010910280);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v1k(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.v1k(images) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.y1j()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (isTraceInProgress()) {
        traceEventStart(1010910280, $dirty, -1, 'ui.compsoable.ImageList$composable (MultiImagePicker.kt:24)');
      }
      var tmp = wrapContentSize(modifier_0._v);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(8);
      var tmp_0 = PaddingValues(tmp$ret$0);
      LazyRow$composable(tmp, null, tmp_0, false, null, null, null, false, ImageList$composable$lambda(images), $composer_0, 384, 250);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(ImageList$composable$lambda_0(modifier_0, images, $changed, $default));
    }
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2, p3) {
      return $boundThis.p2t(p0, p1, p2, p3);
    };
  }
  function ImageList$composable$lambda$lambda($images) {
    return function ($this$items, index, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 112) === 0) {
        $dirty = $dirty | ($composer_0.x1k(index) ? 32 : 16);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 721) === 144) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(375484852, $dirty, -1, 'ui.compsoable.ImageList$composable.<anonymous>.<anonymous> (MultiImagePicker.kt:30)');
        }
        var imageBytes = $images.n(index);
        var bitmap = rememberBitmapFromBytes$composable(imageBytes, $composer_0, 0);
        var tmp_1;
        if (bitmap == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_2 = Companion_instance_0;
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$0 = _Dp___init__impl__ms3zkb(96);
          var tmp_3 = size(tmp_2, tmp$ret$0);
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$1 = _Dp___init__impl__ms3zkb(8);
          var tmp_4 = fillMaxSize(padding_0(tmp_3, tmp$ret$1));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$2 = _Dp___init__impl__ms3zkb(1);
          var tmp_5 = border(tmp_4, BorderStroke(tmp$ret$2, MaterialTheme_instance.cep($composer_0, 6).let()));
          // Inline function 'androidx.compose.ui.unit.dp' call
          var tmp$ret$3 = _Dp___init__impl__ms3zkb(8);
          var tmp_6 = clip(tmp_5, RoundedCornerShape_0(tmp$ret$3));
          var tmp_7 = Companion_getInstance_8().i59_1;
          Image$composable(bitmap, null, tmp_6, null, tmp_7, 0.0, null, _FilterQuality___init__impl__nv51aq(0), $composer_0, 24624, 232);
          tmp_1 = Unit_instance;
        }
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_instance;
        }
        tmp_0 = tmp_8;
      } else {
        $composer_0.j1k();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ImageList$composable$lambda($images) {
    return function ($this$LazyRow) {
      var tmp = $images.m();
      $this$LazyRow.bd0(tmp, VOID, VOID, ComposableLambda$invoke$ref_5(composableLambdaInstance(375484852, true, ImageList$composable$lambda$lambda($images))));
      return Unit_instance;
    };
  }
  function ImageList$composable$lambda_0($modifier, $images, $$changed, $$default) {
    return function ($composer, $force) {
      ImageList$composable($modifier._v, $images, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function NGeminiTopAppBar$composable(modifier, title, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var title_0 = {_v: title};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(2045698150);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v1k(modifier_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.v1k(title_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.y1j()) {
      if (!(($default & 1) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (!(($default & 2) === 0)) {
        title_0._v = 'NGemini';
      }
      if (isTraceInProgress()) {
        traceEventStart(2045698150, $dirty, -1, 'ui.compsoable.NGeminiTopAppBar$composable (TopAppBar.kt:22)');
      }
      var tmp0_modifier = fillMaxWidth(modifier_0._v);
      var tmp = TopAppBarDefaults_instance;
      var tmp1_scrollBehavior = tmp.eep(null, null, $composer_0, 384, 3);
      var tmp_0 = TopAppBarDefaults_instance;
      var tmp_1 = MaterialTheme_instance.cep($composer_0, 6).pet();
      var tmp_2 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp2_colors = tmp_0.oeo(tmp_1, tmp_2, tmp_3, tmp_4, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 196608, 30);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ui.compsoable.NGeminiTopAppBar$composable.<anonymous>' call
      var tmp_5 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_5, 1995455674, true, NGeminiTopAppBar$composable$lambda(title_0));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.h1i(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.v1k(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.t1k();
      var tmp_6;
      if (invalid ? true : it === Companion_getInstance_3().v1j_1) {
        // Inline function 'ui.compsoable.NGeminiTopAppBar$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.u1k(value);
        tmp_6 = value;
      } else {
        tmp_6 = it;
      }
      var tmp_7 = tmp_6;
      var tmp0 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
      $composer_1.j1i();
      var tmp_8 = tmp0;
      TopAppBar$composable(tmp_8, tmp0_modifier, null, null, null, tmp2_colors, tmp1_scrollBehavior, $composer_0, 6, 28);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(NGeminiTopAppBar$composable$lambda_0(modifier_0, title_0, $changed, $default));
    }
  }
  function NGeminiTopAppBar$composable$lambda($title) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(1995455674, $changed, -1, 'ui.compsoable.NGeminiTopAppBar$composable.<anonymous> (TopAppBar.kt:28)');
        }
        var tmp0_fontSize = get_sp(20);
        var tmp1_fontWeight = Companion_getInstance_9().k4h_1;
        var tmp2_color = MaterialTheme_instance.cep($composer_0, 6).ret();
        var tmp3_style = TextStyle_init_$Create$(tmp2_color, tmp0_fontSize, tmp1_fontWeight);
        var tmp4_color = MaterialTheme_instance.cep($composer_0, 6).ret();
        var tmp_0 = $title._v;
        var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
        var tmp_4 = _TextOverflow___init__impl__obguoe(0);
        Text$composable_0(tmp_0, null, tmp4_color, tmp_1, null, null, null, tmp_2, null, null, tmp_3, tmp_4, false, 0, 0, null, tmp3_style, $composer_0, 0, 0, 65530);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.j1k();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function NGeminiTopAppBar$composable$lambda_0($modifier, $title, $$changed, $$default) {
    return function ($composer, $force) {
      NGeminiTopAppBar$composable($modifier._v, $title._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function ComposableSingletons$ChatScreenKt$lambda_1$lambda_k0i2mg($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(626371949, $changed, -1, 'ui.screens.ComposableSingletons$ChatScreenKt.lambda-1.<anonymous> (ChatScreen.kt:50)');
      }
      NGeminiTopAppBar$composable(null, null, $composer_0, 0, 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o2t(p0, p1, p2);
    };
  }
  function ComposableSingletons$ChatScreenKt$lambda_2$lambda_8t4efr($this$AnimatedVisibility, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 81) === 16) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(368539920, $changed, -1, 'ui.screens.ComposableSingletons$ChatScreenKt.lambda-2.<anonymous> (ChatScreen.kt:72)');
      }
      // Inline function 'androidx.compose.foundation.layout.Column$composable' call
      var modifier = fillMaxSize(Companion_instance_0);
      var verticalArrangement = Arrangement_getInstance().har_1;
      var horizontalAlignment = Companion_getInstance_4().n53_1;
      var $composer_1 = $composer_0;
      $composer_1.h1i(860130704);
      sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
      if (!((0 & 1) === 0))
        modifier = Companion_instance_0;
      if (!((0 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().far_1;
      if (!((0 & 4) === 0))
        horizontalAlignment = Companion_getInstance_4().m53_1;
      var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 438 >> 3 | 112 & 438 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $changed_0 = 112 & 438 << 3;
      var modifier_1 = modifier_0;
      var $composer_2 = $composer_1;
      $composer_2.h1i(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!((0 & 2) === 0))
        modifier_1 = Companion_instance_0;
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.c1l();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var factory = Companion_getInstance_5().w6f_1;
      var skippableUpdate = materializerOf(modifier_1);
      var $changed_1 = 6 | 7168 & $changed_0 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.w1j();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.m1k();
      if ($composer_3.x1j()) {
        $composer_3.n1k(factory);
      } else {
        $composer_3.o1k();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().b6g_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().a6g_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var block = Companion_getInstance_5().e6g_1;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
      var tmp_0;
      if ($this$with.x1j() ? true : !equals($this$with.t1k(), compositeKeyHash)) {
        $this$with.u1k(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).s1k(compositeKeyHash, block);
        tmp_0 = Unit_instance;
      }
      skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
      $composer_3.h1i(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
      // Inline function 'ui.screens.ComposableSingletons$ChatScreenKt.lambda-2.<anonymous>.<anonymous>' call
      var $composer_5 = $composer_4;
      var tmp_1 = painterResource$composable('placeholder.png', $composer_5, 6);
      var tmp_2 = Companion_instance_0;
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(160);
      var tmp_3 = size(tmp_2, tmp$ret$2);
      var tmp_4 = Companion_getInstance_8().i59_1;
      Image$composable_0(tmp_1, 'placeholder', tmp_3, null, tmp_4, 0.0, null, $composer_5, 25008, 104);
      var tmp_5 = MaterialTheme_instance.cep($composer_5, 6).bet();
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_8 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_9 = _TextOverflow___init__impl__obguoe(0);
      Text$composable_0('Welcome to NGemini', null, tmp_5, tmp_6, null, null, null, tmp_7, null, null, tmp_8, tmp_9, false, 0, 0, null, null, $composer_5, 6, 0, 131066);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.j1i();
      $composer_3.p1k();
      $composer_2.j1i();
      $composer_1.j1i();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    return Unit_instance;
  }
  function ComposableSingletons$ChatScreenKt() {
    ComposableSingletons$ChatScreenKt_instance = this;
    var tmp = this;
    tmp.xh2_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(626371949, false, ComposableSingletons$ChatScreenKt$lambda_1$lambda_k0i2mg));
    var tmp_0 = this;
    tmp_0.yh2_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(368539920, false, ComposableSingletons$ChatScreenKt$lambda_2$lambda_8t4efr));
  }
  var ComposableSingletons$ChatScreenKt_instance;
  function ComposableSingletons$ChatScreenKt_getInstance() {
    if (ComposableSingletons$ChatScreenKt_instance == null)
      new ComposableSingletons$ChatScreenKt();
    return ComposableSingletons$ChatScreenKt_instance;
  }
  function ChatScreen$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(-217538747);
    if (!($changed === 0) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(-217538747, $changed, -1, 'ui.screens.ChatScreen$composable (ChatScreen.kt:34)');
      }
      // Inline function 'org.koin.core.Koin.get' call
      // Inline function 'org.koin.core.scope.Scope.get' call
      var contentViewModel = KoinPlatform_instance.ufb().af8_1.nf8_1.rfb(getKClass(ChatViewModel), null, null);
      var state$delegate = collectAsState$composable(contentViewModel.ch3_1, null, $composer_0, 0, 1);
      ChatContent$composable(ChatScreen$composable$lambda(state$delegate), contentViewModel, $composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(ChatScreen$composable$lambda_0($changed));
    }
  }
  function ChatContent$composable(chatUiState, viewModel, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(-1179991981);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.v1k(chatUiState) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.v1k(viewModel) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(-1179991981, $dirty, -1, 'ui.screens.ChatContent$composable (ChatScreen.kt:47)');
      }
      var tmp0_contentColor = MaterialTheme_instance.cep($composer_0, 6).h4k();
      var tmp = ComposableSingletons$ChatScreenKt_getInstance().xh2_1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ui.screens.ChatContent$composable.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 98006348, true, ChatContent$composable$lambda(chatUiState, viewModel));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.h1i(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.v1k(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.t1k();
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance_3().v1j_1) {
        // Inline function 'ui.screens.ChatContent$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.u1k(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.j1i();
      var tmp_3 = tmp0;
      var tmp_4 = _FabPosition___init__impl__9ib2hj(0);
      var tmp_5 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ui.screens.ChatContent$composable.<anonymous>' call
      var tmp_6 = $composer_0;
      var dispatchReceiver_0 = composableLambda(tmp_6, -258529470, true, ChatContent$composable$lambda_0(chatUiState));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.h1i(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.v1k(dispatchReceiver_0);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_2.t1k();
      var tmp_7;
      if (invalid_0 ? true : it_0 === Companion_getInstance_3().v1j_1) {
        // Inline function 'ui.screens.ChatContent$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_10(dispatchReceiver_0);
        $composer_2.u1k(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_2.j1i();
      Scaffold$composable(null, tmp, tmp_3, null, null, tmp_4, tmp_5, tmp0_contentColor, null, tmp0_0, $composer_0, 805306800, 377);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(ChatContent$composable$lambda_1(chatUiState, viewModel, $changed));
    }
  }
  function ChatScreen$composable$lambda($state$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('state', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $state$delegate.t2();
  }
  function ChatScreen$composable$lambda_0($$changed) {
    return function ($composer, $force) {
      ChatScreen$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ChatContent$composable$lambda$lambda($viewModel) {
    return function (message, images) {
      $viewModel.eh3(message, images);
      return Unit_instance;
    };
  }
  function ChatContent$composable$lambda($chatUiState, $viewModel) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(98006348, $changed, -1, 'ui.screens.ChatContent$composable.<anonymous> (ChatScreen.kt:52)');
        }
        var tmp_0 = navigationBarsPadding(Companion_instance_0);
        BottomFields$composable(tmp_0, $chatUiState, ChatContent$composable$lambda$lambda($viewModel), (new ImagePickerFactory(getPlatformContext$composable($composer_0, 0))).hh3($composer_0, 0), $composer_0, 4096, 0);
        var tmp_1;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_1 = Unit_instance;
        }
        tmp = tmp_1;
      } else {
        $composer_0.j1k();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function ChatContent$composable$lambda_0($chatUiState) {
    return function (paddingValues, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.v1k(paddingValues) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(-258529470, $dirty, -1, 'ui.screens.ChatContent$composable.<anonymous> (ChatScreen.kt:62)');
        }
        // Inline function 'androidx.compose.foundation.layout.Column$composable' call
        var modifier = fillMaxSize(Companion_instance_0);
        var verticalArrangement = Arrangement_getInstance().har_1;
        var horizontalAlignment = Companion_getInstance_4().n53_1;
        var $composer_1 = $composer_0;
        $composer_1.h1i(860130704);
        sourceInformation($composer_1, 'CC(Column$composable)P(2,3,1)76@3858L61,77@3924L133:Column.kt#2w3rfo');
        if (!((0 & 1) === 0))
          modifier = Companion_instance_0;
        if (!((0 & 2) === 0))
          verticalArrangement = Arrangement_getInstance().far_1;
        if (!((0 & 4) === 0))
          horizontalAlignment = Companion_getInstance_4().m53_1;
        var measurePolicy = columnMeasurePolicy$composable(verticalArrangement, horizontalAlignment, $composer_1, 14 & 438 >> 3 | 112 & 438 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var modifier_0 = modifier;
        var $changed_0 = 112 & 438 << 3;
        var modifier_1 = modifier_0;
        var $composer_2 = $composer_1;
        $composer_2.h1i(1725976829);
        sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!((0 & 2) === 0))
          modifier_1 = Companion_instance_0;
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
        var localMap = $composer_2.c1l();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var factory = Companion_getInstance_5().w6f_1;
        var skippableUpdate = materializerOf(modifier_1);
        var $changed_1 = 6 | 7168 & $changed_0 << 9;
        var $composer_3 = $composer_2;
        var tmp_1 = $composer_3.w1j();
        if (!isInterface(tmp_1, Applier)) {
          invalidApplier();
        }
        $composer_3.m1k();
        if ($composer_3.x1j()) {
          $composer_3.n1k(factory);
        } else {
          $composer_3.o1k();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_5().b6g_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_5().a6g_1);
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var block = Companion_getInstance_5().e6g_1;
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        var $this$with = _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode);
        var tmp_2;
        if ($this$with.x1j() ? true : !equals($this$with.t1k(), compositeKeyHash)) {
          $this$with.u1k(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av($this$ReusableComposeNode).s1k(compositeKeyHash, block);
          tmp_2 = Unit_instance;
        }
        skippableUpdate(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & $changed_1 >> 3);
        $composer_3.h1i(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Column$composable.<anonymous>' call
        var $composer_4 = $composer_3;
        sourceInformationMarkerStart($composer_4, 1633582080, 'C78@3972L9:Column.kt#2w3rfo');
        // Inline function 'ui.screens.ChatContent$composable.<anonymous>.<anonymous>.<anonymous>' call
        var $changed_2 = 6 | 112 & 438 >> 6;
        var $composer_5 = $composer_4;
        var tmp_3 = $chatUiState.fh2_1.u();
        var tmp_4 = fadeIn();
        var tmp_5 = fadeOut();
        AnimatedVisibility$composable_0(ColumnScopeInstance_instance, tmp_3, null, tmp_4, tmp_5, null, ComposableSingletons$ChatScreenKt_getInstance().yh2_1, $composer_5, 1600512 | 14 & $changed_2, 18);
        sourceInformationMarkerEnd($composer_4);
        $composer_3.j1i();
        $composer_3.p1k();
        $composer_2.j1i();
        $composer_1.j1i();
        ChatMessageItem$composable(padding_1(Companion_instance_0, paddingValues), $chatUiState, $composer_0, 0, 0);
        var tmp_6;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_6 = Unit_instance;
        }
        tmp_0 = tmp_6;
      } else {
        $composer_0.j1k();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.o2t(p0, p1, p2);
    };
  }
  function ChatContent$composable$lambda_1($chatUiState, $viewModel, $$changed) {
    return function ($composer, $force) {
      ChatContent$composable($chatUiState, $viewModel, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ChatUiState(message, isLoading, images, isConnectionError, errorMessage) {
    message = message === VOID ? emptyList() : message;
    isLoading = isLoading === VOID ? false : isLoading;
    images = images === VOID ? emptyList() : images;
    isConnectionError = isConnectionError === VOID ? false : isConnectionError;
    errorMessage = errorMessage === VOID ? null : errorMessage;
    this.fh2_1 = message;
    this.gh2_1 = isLoading;
    this.hh2_1 = images;
    this.ih2_1 = isConnectionError;
    this.jh2_1 = errorMessage;
    this.kh2_1 = 0;
  }
  protoOf(ChatUiState).ih3 = function (message, isLoading, images, isConnectionError, errorMessage) {
    return new ChatUiState(message, isLoading, images, isConnectionError, errorMessage);
  };
  protoOf(ChatUiState).jh3 = function (message, isLoading, images, isConnectionError, errorMessage, $super) {
    message = message === VOID ? this.fh2_1 : message;
    isLoading = isLoading === VOID ? this.gh2_1 : isLoading;
    images = images === VOID ? this.hh2_1 : images;
    isConnectionError = isConnectionError === VOID ? this.ih2_1 : isConnectionError;
    errorMessage = errorMessage === VOID ? this.jh2_1 : errorMessage;
    return $super === VOID ? this.ih3(message, isLoading, images, isConnectionError, errorMessage) : $super.ih3.call(this, message, isLoading, images, isConnectionError, errorMessage);
  };
  protoOf(ChatUiState).toString = function () {
    return 'ChatUiState(message=' + this.fh2_1 + ', isLoading=' + this.gh2_1 + ', images=' + this.hh2_1 + ', isConnectionError=' + this.ih2_1 + ', errorMessage=' + this.jh2_1 + ')';
  };
  protoOf(ChatUiState).hashCode = function () {
    var result = hashCode(this.fh2_1);
    result = imul(result, 31) + getBooleanHashCode(this.gh2_1) | 0;
    result = imul(result, 31) + hashCode(this.hh2_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.ih2_1) | 0;
    result = imul(result, 31) + (this.jh2_1 == null ? 0 : getStringHashCode(this.jh2_1)) | 0;
    return result;
  };
  protoOf(ChatUiState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChatUiState))
      return false;
    var tmp0_other_with_cast = other instanceof ChatUiState ? other : THROW_CCE();
    if (!equals(this.fh2_1, tmp0_other_with_cast.fh2_1))
      return false;
    if (!(this.gh2_1 === tmp0_other_with_cast.gh2_1))
      return false;
    if (!equals(this.hh2_1, tmp0_other_with_cast.hh2_1))
      return false;
    if (!(this.ih2_1 === tmp0_other_with_cast.ih2_1))
      return false;
    if (!(this.jh2_1 == tmp0_other_with_cast.jh2_1))
      return false;
    return true;
  };
  function handleContentGenerationError($this) {
    $this.bh3_1.s19($this.bh3_1.t2().jh3(VOID, false, VOID, true, 'Failed to generate content. Please try again.'));
  }
  function updateLastBotMessage($this, text) {
    var messages = toMutableList($this.bh3_1.t2().fh2_1);
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!messages.u()) {
      var tmp0_safe_receiver = last(messages);
      tmp = (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.pgz_1) === Role_MODEL_getInstance().tgz_1;
    } else {
      tmp = false;
    }
    if (tmp) {
      var last_0 = last(messages);
      var updatedMessage = last_0 == null ? null : last_0.wgz(text);
      messages.x(get_lastIndex(messages), updatedMessage);
      $this.bh3_1.s19($this.bh3_1.t2().jh3(messages));
    }
  }
  function addToMessages($this, text, sender, images) {
    var newMessage = new ChatMessage(text, images, sender.tgz_1);
    $this.bh3_1.s19($this.bh3_1.t2().jh3(plus($this.bh3_1.t2().fh2_1, newMessage), true, images));
  }
  function ChatViewModel$generateContentWithText$slambda(this$0, $images, $content, resultContinuation) {
    this.sh3_1 = this$0;
    this.th3_1 = $images;
    this.uh3_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChatViewModel$generateContentWithText$slambda).m22 = function ($this$launch, $completion) {
    var tmp = this.n22($this$launch, $completion);
    tmp.ec_1 = Unit_instance;
    tmp.fc_1 = null;
    return tmp.oc();
  };
  protoOf(ChatViewModel$generateContentWithText$slambda).ad = function (p1, $completion) {
    return this.m22((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChatViewModel$generateContentWithText$slambda).oc = function () {
    var suspendResult = this.ec_1;
    $sm: do
      try {
        var tmp = this.cc_1;
        switch (tmp) {
          case 0:
            this.dc_1 = 4;
            this.sh3_1.bh3_1.s19(this.sh3_1.bh3_1.t2().jh3(VOID, true, VOID, false));
            if (!(this.th3_1 == null)) {
              addToMessages(this.sh3_1, this.uh3_1, Role_USER_getInstance(), this.th3_1);
            }

            this.dc_1 = 2;
            this.sh3_1.bh3_1.s19(this.sh3_1.bh3_1.t2().jh3(VOID, true, VOID, false));
            this.cc_1 = 1;
            suspendResult = this.sh3_1.ah3_1.lh1(this.uh3_1, this.th3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var nGemini = suspendResult;
            var tmp0_safe_receiver = nGemini.ih1_1;
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n(0);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bh0_1;
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.kh0_1;
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.n(0);
            var generatedContent = toString_0(tmp4_safe_receiver == null ? null : tmp4_safe_receiver.qh0_1);
            updateLastBotMessage(this.sh3_1, generatedContent);
            addToMessages(this.sh3_1, generatedContent, Role_MODEL_getInstance(), emptyList());
            this.sh3_1.bh3_1.s19(this.sh3_1.bh3_1.t2().jh3(VOID, false));
            this.dc_1 = 4;
            this.cc_1 = 3;
            continue $sm;
          case 2:
            this.dc_1 = 4;
            var tmp_0 = this.fc_1;
            if (tmp_0 instanceof Exception) {
              var e = this.fc_1;
              handleContentGenerationError(this.sh3_1);
              this.cc_1 = 3;
              continue $sm;
            } else {
              throw this.fc_1;
            }

          case 3:
            this.dc_1 = 4;
            return Unit_instance;
          case 4:
            throw this.fc_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.dc_1 === 4) {
          throw e_0;
        } else {
          this.cc_1 = this.dc_1;
          this.fc_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(ChatViewModel$generateContentWithText$slambda).n22 = function ($this$launch, completion) {
    var i = new ChatViewModel$generateContentWithText$slambda(this.sh3_1, this.th3_1, this.uh3_1, completion);
    i.vh3_1 = $this$launch;
    return i;
  };
  function ChatViewModel$generateContentWithText$slambda_0(this$0, $images, $content, resultContinuation) {
    var i = new ChatViewModel$generateContentWithText$slambda(this$0, $images, $content, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.m22($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChatViewModel(getContentUseCase) {
    ViewModel.call(this);
    this.ah3_1 = getContentUseCase;
    this.bh3_1 = MutableStateFlow(new ChatUiState());
    this.ch3_1 = asStateFlow(this.bh3_1);
    this.dh3_1 = 0;
  }
  protoOf(ChatViewModel).eh3 = function (content, images) {
    var tmp = Dispatchers_getInstance().my_1;
    launch(this.fgc_1, tmp, VOID, ChatViewModel$generateContentWithText$slambda_0(this, images, content, null));
  };
  function get_md_theme_light_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primary;
  }
  var md_theme_light_primary;
  function get_md_theme_light_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimary;
  }
  var md_theme_light_onPrimary;
  function get_md_theme_light_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_primaryContainer;
  }
  var md_theme_light_primaryContainer;
  function get_md_theme_light_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onPrimaryContainer;
  }
  var md_theme_light_onPrimaryContainer;
  function get_md_theme_light_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondary;
  }
  var md_theme_light_secondary;
  function get_md_theme_light_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondary;
  }
  var md_theme_light_onSecondary;
  function get_md_theme_light_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_secondaryContainer;
  }
  var md_theme_light_secondaryContainer;
  function get_md_theme_light_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSecondaryContainer;
  }
  var md_theme_light_onSecondaryContainer;
  function get_md_theme_light_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiary;
  }
  var md_theme_light_tertiary;
  function get_md_theme_light_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiary;
  }
  var md_theme_light_onTertiary;
  function get_md_theme_light_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_tertiaryContainer;
  }
  var md_theme_light_tertiaryContainer;
  function get_md_theme_light_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onTertiaryContainer;
  }
  var md_theme_light_onTertiaryContainer;
  function get_md_theme_light_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_error;
  }
  var md_theme_light_error;
  function get_md_theme_light_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onError;
  }
  var md_theme_light_onError;
  function get_md_theme_light_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_errorContainer;
  }
  var md_theme_light_errorContainer;
  function get_md_theme_light_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onErrorContainer;
  }
  var md_theme_light_onErrorContainer;
  function get_md_theme_light_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outline;
  }
  var md_theme_light_outline;
  function get_md_theme_light_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_background;
  }
  var md_theme_light_background;
  function get_md_theme_light_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onBackground;
  }
  var md_theme_light_onBackground;
  function get_md_theme_light_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surface;
  }
  var md_theme_light_surface;
  function get_md_theme_light_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurface;
  }
  var md_theme_light_onSurface;
  function get_md_theme_light_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceVariant;
  }
  var md_theme_light_surfaceVariant;
  function get_md_theme_light_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_onSurfaceVariant;
  }
  var md_theme_light_onSurfaceVariant;
  function get_md_theme_light_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseSurface;
  }
  var md_theme_light_inverseSurface;
  function get_md_theme_light_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inverseOnSurface;
  }
  var md_theme_light_inverseOnSurface;
  function get_md_theme_light_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_inversePrimary;
  }
  var md_theme_light_inversePrimary;
  function get_md_theme_light_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_surfaceTint;
  }
  var md_theme_light_surfaceTint;
  function get_md_theme_light_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_outlineVariant;
  }
  var md_theme_light_outlineVariant;
  function get_md_theme_light_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_light_scrim;
  }
  var md_theme_light_scrim;
  function get_md_theme_dark_primary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primary;
  }
  var md_theme_dark_primary;
  function get_md_theme_dark_onPrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimary;
  }
  var md_theme_dark_onPrimary;
  function get_md_theme_dark_primaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_primaryContainer;
  }
  var md_theme_dark_primaryContainer;
  function get_md_theme_dark_onPrimaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onPrimaryContainer;
  }
  var md_theme_dark_onPrimaryContainer;
  function get_md_theme_dark_secondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondary;
  }
  var md_theme_dark_secondary;
  function get_md_theme_dark_onSecondary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondary;
  }
  var md_theme_dark_onSecondary;
  function get_md_theme_dark_secondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_secondaryContainer;
  }
  var md_theme_dark_secondaryContainer;
  function get_md_theme_dark_onSecondaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSecondaryContainer;
  }
  var md_theme_dark_onSecondaryContainer;
  function get_md_theme_dark_tertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiary;
  }
  var md_theme_dark_tertiary;
  function get_md_theme_dark_onTertiary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiary;
  }
  var md_theme_dark_onTertiary;
  function get_md_theme_dark_tertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_tertiaryContainer;
  }
  var md_theme_dark_tertiaryContainer;
  function get_md_theme_dark_onTertiaryContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onTertiaryContainer;
  }
  var md_theme_dark_onTertiaryContainer;
  function get_md_theme_dark_error() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_error;
  }
  var md_theme_dark_error;
  function get_md_theme_dark_onError() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onError;
  }
  var md_theme_dark_onError;
  function get_md_theme_dark_errorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_errorContainer;
  }
  var md_theme_dark_errorContainer;
  function get_md_theme_dark_onErrorContainer() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onErrorContainer;
  }
  var md_theme_dark_onErrorContainer;
  function get_md_theme_dark_outline() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outline;
  }
  var md_theme_dark_outline;
  function get_md_theme_dark_background() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_background;
  }
  var md_theme_dark_background;
  function get_md_theme_dark_onBackground() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onBackground;
  }
  var md_theme_dark_onBackground;
  function get_md_theme_dark_surface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surface;
  }
  var md_theme_dark_surface;
  function get_md_theme_dark_onSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurface;
  }
  var md_theme_dark_onSurface;
  function get_md_theme_dark_surfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceVariant;
  }
  var md_theme_dark_surfaceVariant;
  function get_md_theme_dark_onSurfaceVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_onSurfaceVariant;
  }
  var md_theme_dark_onSurfaceVariant;
  function get_md_theme_dark_inverseSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseSurface;
  }
  var md_theme_dark_inverseSurface;
  function get_md_theme_dark_inverseOnSurface() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inverseOnSurface;
  }
  var md_theme_dark_inverseOnSurface;
  function get_md_theme_dark_inversePrimary() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_inversePrimary;
  }
  var md_theme_dark_inversePrimary;
  function get_md_theme_dark_surfaceTint() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_surfaceTint;
  }
  var md_theme_dark_surfaceTint;
  function get_md_theme_dark_outlineVariant() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_outlineVariant;
  }
  var md_theme_dark_outlineVariant;
  function get_md_theme_dark_scrim() {
    _init_properties_Color_kt__6h0l1r();
    return md_theme_dark_scrim;
  }
  var md_theme_dark_scrim;
  var seed;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      md_theme_light_primary = Color(new Long(-10006364, 0));
      md_theme_light_onPrimary = Color(new Long(-1, 0));
      md_theme_light_primaryContainer = Color(new Long(-1384961, 0));
      md_theme_light_onPrimaryContainer = Color(new Long(-14614435, 0));
      md_theme_light_secondary = Color(new Long(-10331279, 0));
      md_theme_light_onSecondary = Color(new Long(-1, 0));
      md_theme_light_secondaryContainer = Color(new Long(-1515784, 0));
      md_theme_light_onSecondaryContainer = Color(new Long(-14870229, 0));
      md_theme_light_tertiary = Color(new Long(-8564128, 0));
      md_theme_light_onTertiary = Color(new Long(-1, 0));
      md_theme_light_tertiaryContainer = Color(new Long(-10012, 0));
      md_theme_light_onTertiaryContainer = Color(new Long(-13561571, 0));
      md_theme_light_error = Color(new Long(-5036514, 0));
      md_theme_light_onError = Color(new Long(-1, 0));
      md_theme_light_errorContainer = Color(new Long(-401700, 0));
      md_theme_light_onErrorContainer = Color(new Long(-12513781, 0));
      md_theme_light_outline = Color(new Long(-8817538, 0));
      md_theme_light_background = Color(new Long(-1026, 0));
      md_theme_light_onBackground = Color(new Long(-14935265, 0));
      md_theme_light_surface = Color(new Long(-1026, 0));
      md_theme_light_onSurface = Color(new Long(-14935265, 0));
      md_theme_light_surfaceVariant = Color(new Long(-1580820, 0));
      md_theme_light_onSurfaceVariant = Color(new Long(-11975345, 0));
      md_theme_light_inverseSurface = Color(new Long(-13553613, 0));
      md_theme_light_inverseOnSurface = Color(new Long(-725004, 0));
      md_theme_light_inversePrimary = Color(new Long(-3097345, 0));
      md_theme_light_surfaceTint = Color(new Long(-10006364, 0));
      md_theme_light_outlineVariant = Color(new Long(-3488560, 0));
      md_theme_light_scrim = Color(new Long(-16777216, 0));
      md_theme_dark_primary = Color(new Long(-3097345, 0));
      md_theme_dark_onPrimary = Color(new Long(-13099406, 0));
      md_theme_dark_primaryContainer = Color(new Long(-11585653, 0));
      md_theme_dark_onPrimaryContainer = Color(new Long(-1384961, 0));
      md_theme_dark_secondary = Color(new Long(-3357988, 0));
      md_theme_dark_onSecondary = Color(new Long(-13423295, 0));
      md_theme_dark_secondaryContainer = Color(new Long(-11910056, 0));
      md_theme_dark_onSecondaryContainer = Color(new Long(-1515784, 0));
      md_theme_dark_tertiary = Color(new Long(-1066808, 0));
      md_theme_dark_onTertiary = Color(new Long(-11983566, 0));
      md_theme_dark_tertiaryContainer = Color(new Long(-10273976, 0));
      md_theme_dark_onTertiaryContainer = Color(new Long(-10012, 0));
      md_theme_dark_error = Color(new Long(-870219, 0));
      md_theme_dark_onError = Color(new Long(-10480624, 0));
      md_theme_dark_errorContainer = Color(new Long(-7594728, 0));
      md_theme_dark_onErrorContainer = Color(new Long(-401700, 0));
      md_theme_dark_outline = Color(new Long(-7106663, 0));
      md_theme_dark_background = Color(new Long(-14935265, 0));
      md_theme_dark_onBackground = Color(new Long(-1646107, 0));
      md_theme_dark_surface = Color(new Long(-14935265, 0));
      md_theme_dark_onSurface = Color(new Long(-1646107, 0));
      md_theme_dark_surfaceVariant = Color(new Long(-11975345, 0));
      md_theme_dark_onSurfaceVariant = Color(new Long(-3488560, 0));
      md_theme_dark_inverseSurface = Color(new Long(-1646107, 0));
      md_theme_dark_inverseOnSurface = Color(new Long(-13553613, 0));
      md_theme_dark_inversePrimary = Color(new Long(-10006364, 0));
      md_theme_dark_surfaceTint = Color(new Long(-3097345, 0));
      md_theme_dark_outlineVariant = Color(new Long(-11975345, 0));
      md_theme_dark_scrim = Color(new Long(-16777216, 0));
      seed = Color(new Long(-10006364, 0));
    }
  }
  function get_LightColors() {
    _init_properties_Theme_kt__w31tqv();
    return LightColors;
  }
  var LightColors;
  function get_DarkColors() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColors;
  }
  var DarkColors;
  function get_AppShapes() {
    _init_properties_Theme_kt__w31tqv();
    return AppShapes;
  }
  var AppShapes;
  function AppTheme$composable(content, $composer, $changed) {
    _init_properties_Theme_kt__w31tqv();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(1374636396);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.a1l(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(1374636396, $dirty, -1, 'ui.theme.AppTheme$composable (Theme.kt:98)');
      }
      var isSystemDarkTheme = isSystemInDarkTheme$composable($composer_0, 0);
      var tmp = get_LocalContentAlpha();
      var tmp_0;
      if (isSystemDarkTheme) {
        $composer_0.h1i(1485484396);
        var tmp0_group = ContentAlpha_instance.dgd($composer_0, 6);
        $composer_0.j1i();
        tmp_0 = tmp0_group;
      } else {
        $composer_0.h1i(1485484419);
        var tmp1_group = ContentAlpha_instance.egd($composer_0, 6);
        $composer_0.j1i();
        tmp_0 = tmp1_group;
      }
      var tmp_1 = [tmp.t1z(tmp_0), get_LocalContentColor().t1z(new Color_0(isSystemDarkTheme ? get_md_theme_light_onBackground() : get_md_theme_dark_onBackground()))];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ui.theme.AppTheme$composable.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 561830056, true, AppTheme$composable$lambda(isSystemDarkTheme, content));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.h1i(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.v1k(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.t1k();
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance_3().v1j_1) {
        // Inline function 'ui.theme.AppTheme$composable.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_12(dispatchReceiver);
        $composer_1.u1k(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.j1i();
      CompositionLocalProvider$composable(tmp_1, tmp0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp2_safe_receiver = $composer_0.f1k();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.y1z(AppTheme$composable$lambda_0(content, $changed));
    }
  }
  function AppTheme$composable$lambda$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(469976404, $changed, -1, 'ui.theme.AppTheme$composable.<anonymous>.<anonymous> (Theme.kt:110)');
        }
        var tmp_0 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
        var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
        var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
        Surface$composable(null, null, tmp_0, tmp_1, tmp_2, tmp_3, null, $content, $composer_0, 0, 127);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_instance;
        }
        tmp = tmp_4;
      } else {
        $composer_0.j1k();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_11($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function AppTheme$composable$lambda($isSystemDarkTheme, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
        if (isTraceInProgress()) {
          traceEventStart(561830056, $changed, -1, 'ui.theme.AppTheme$composable.<anonymous> (Theme.kt:105)');
        }
        SystemAppearance$composable(!$isSystemDarkTheme, $composer_0, 0);
        var tmp_0 = $isSystemDarkTheme ? get_DarkColors() : get_LightColors();
        var tmp_1 = get_AppShapes();
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ui.theme.AppTheme$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_2 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_2, 469976404, true, AppTheme$composable$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_1 = $composer_0;
        $composer_1.h1i(-838505973);
        sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.v1k(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.t1k();
        var tmp_3;
        if (invalid ? true : it === Companion_getInstance_3().v1j_1) {
          // Inline function 'ui.theme.AppTheme$composable.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_11(dispatchReceiver);
          $composer_1.u1k(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        $composer_1.j1i();
        MaterialTheme$composable(tmp_0, tmp_1, null, tmp0, $composer_0, 3120, 4);
        var tmp_5;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_5 = Unit_instance;
        }
        tmp = tmp_5;
      } else {
        $composer_0.j1k();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_12($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function AppTheme$composable$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppTheme$composable($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      var tmp0_primary = get_md_theme_light_primary();
      var tmp1_onPrimary = get_md_theme_light_onPrimary();
      var tmp2_primaryContainer = get_md_theme_light_primaryContainer();
      var tmp3_onPrimaryContainer = get_md_theme_light_onPrimaryContainer();
      var tmp4_secondary = get_md_theme_light_secondary();
      var tmp5_onSecondary = get_md_theme_light_onSecondary();
      var tmp6_secondaryContainer = get_md_theme_light_secondaryContainer();
      var tmp7_onSecondaryContainer = get_md_theme_light_onSecondaryContainer();
      var tmp8_tertiary = get_md_theme_light_tertiary();
      var tmp9_onTertiary = get_md_theme_light_onTertiary();
      var tmp10_tertiaryContainer = get_md_theme_light_tertiaryContainer();
      var tmp11_onTertiaryContainer = get_md_theme_light_onTertiaryContainer();
      var tmp12_error = get_md_theme_light_error();
      var tmp13_errorContainer = get_md_theme_light_errorContainer();
      var tmp14_onError = get_md_theme_light_onError();
      var tmp15_onErrorContainer = get_md_theme_light_onErrorContainer();
      var tmp16_background = get_md_theme_light_background();
      var tmp17_onBackground = get_md_theme_light_onBackground();
      var tmp18_surface = get_md_theme_light_surface();
      var tmp19_onSurface = get_md_theme_light_onSurface();
      var tmp20_surfaceVariant = get_md_theme_light_surfaceVariant();
      var tmp21_onSurfaceVariant = get_md_theme_light_onSurfaceVariant();
      var tmp22_outline = get_md_theme_light_outline();
      var tmp23_inverseOnSurface = get_md_theme_light_inverseOnSurface();
      var tmp24_inverseSurface = get_md_theme_light_inverseSurface();
      var tmp25_inversePrimary = get_md_theme_light_inversePrimary();
      var tmp26_surfaceTint = get_md_theme_light_surfaceTint();
      var tmp27_outlineVariant = get_md_theme_light_outlineVariant();
      var tmp28_scrim = get_md_theme_light_scrim();
      LightColors = lightColorScheme(tmp0_primary, tmp1_onPrimary, tmp2_primaryContainer, tmp3_onPrimaryContainer, tmp25_inversePrimary, tmp4_secondary, tmp5_onSecondary, tmp6_secondaryContainer, tmp7_onSecondaryContainer, tmp8_tertiary, tmp9_onTertiary, tmp10_tertiaryContainer, tmp11_onTertiaryContainer, tmp16_background, tmp17_onBackground, tmp18_surface, tmp19_onSurface, tmp20_surfaceVariant, tmp21_onSurfaceVariant, tmp26_surfaceTint, tmp24_inverseSurface, tmp23_inverseOnSurface, tmp12_error, tmp14_onError, tmp13_errorContainer, tmp15_onErrorContainer, tmp22_outline, tmp27_outlineVariant, tmp28_scrim);
      var tmp0_primary_0 = get_md_theme_dark_primary();
      var tmp1_onPrimary_0 = get_md_theme_dark_onPrimary();
      var tmp2_primaryContainer_0 = get_md_theme_dark_primaryContainer();
      var tmp3_onPrimaryContainer_0 = get_md_theme_dark_onPrimaryContainer();
      var tmp4_secondary_0 = get_md_theme_dark_secondary();
      var tmp5_onSecondary_0 = get_md_theme_dark_onSecondary();
      var tmp6_secondaryContainer_0 = get_md_theme_dark_secondaryContainer();
      var tmp7_onSecondaryContainer_0 = get_md_theme_dark_onSecondaryContainer();
      var tmp8_tertiary_0 = get_md_theme_dark_tertiary();
      var tmp9_onTertiary_0 = get_md_theme_dark_onTertiary();
      var tmp10_tertiaryContainer_0 = get_md_theme_dark_tertiaryContainer();
      var tmp11_onTertiaryContainer_0 = get_md_theme_dark_onTertiaryContainer();
      var tmp12_error_0 = get_md_theme_dark_error();
      var tmp13_errorContainer_0 = get_md_theme_dark_errorContainer();
      var tmp14_onError_0 = get_md_theme_dark_onError();
      var tmp15_onErrorContainer_0 = get_md_theme_dark_onErrorContainer();
      var tmp16_background_0 = get_md_theme_dark_background();
      var tmp17_onBackground_0 = get_md_theme_dark_onBackground();
      var tmp18_surface_0 = get_md_theme_dark_surface();
      var tmp19_onSurface_0 = get_md_theme_dark_onSurface();
      var tmp20_surfaceVariant_0 = get_md_theme_dark_surfaceVariant();
      var tmp21_onSurfaceVariant_0 = get_md_theme_dark_onSurfaceVariant();
      var tmp22_outline_0 = get_md_theme_dark_outline();
      var tmp23_inverseOnSurface_0 = get_md_theme_dark_inverseOnSurface();
      var tmp24_inverseSurface_0 = get_md_theme_dark_inverseSurface();
      var tmp25_inversePrimary_0 = get_md_theme_dark_inversePrimary();
      var tmp26_surfaceTint_0 = get_md_theme_dark_surfaceTint();
      var tmp27_outlineVariant_0 = get_md_theme_dark_outlineVariant();
      var tmp28_scrim_0 = get_md_theme_dark_scrim();
      DarkColors = darkColorScheme(tmp0_primary_0, tmp1_onPrimary_0, tmp2_primaryContainer_0, tmp3_onPrimaryContainer_0, tmp25_inversePrimary_0, tmp4_secondary_0, tmp5_onSecondary_0, tmp6_secondaryContainer_0, tmp7_onSecondaryContainer_0, tmp8_tertiary_0, tmp9_onTertiary_0, tmp10_tertiaryContainer_0, tmp11_onTertiaryContainer_0, tmp16_background_0, tmp17_onBackground_0, tmp18_surface_0, tmp19_onSurface_0, tmp20_surfaceVariant_0, tmp21_onSurfaceVariant_0, tmp26_surfaceTint_0, tmp24_inverseSurface_0, tmp23_inverseOnSurface_0, tmp12_error_0, tmp14_onError_0, tmp13_errorContainer_0, tmp15_onErrorContainer_0, tmp22_outline_0, tmp27_outlineVariant_0, tmp28_scrim_0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$0 = _Dp___init__impl__ms3zkb(2);
      var tmp = RoundedCornerShape_0(tmp$ret$0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(4);
      var tmp_0 = RoundedCornerShape_0(tmp$ret$1);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$2 = _Dp___init__impl__ms3zkb(8);
      var tmp_1 = RoundedCornerShape_0(tmp$ret$2);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$3 = _Dp___init__impl__ms3zkb(16);
      var tmp_2 = RoundedCornerShape_0(tmp$ret$3);
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$4 = _Dp___init__impl__ms3zkb(32);
      AppShapes = new Shapes(tmp, tmp_0, tmp_1, tmp_2, RoundedCornerShape_0(tmp$ret$4));
    }
  }
  function initKoin() {
    return startKoin(initKoin$lambda);
  }
  function initKoin$lambda($this$startKoin) {
    $this$startKoin.xf8([get_nGeminiServiceModule(), get_nGeminiRepositoryModule(), get_networkModule(), get_useCaseModule(), get_viewModelModule()]);
    return Unit_instance;
  }
  function main() {
    initKoin();
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref_13($boundThis) {
    return function (p0, p1) {
      return $boundThis.b1v(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(-1587894689, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:8)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.wh3_1 = ComposableLambda$invoke$ref_13(composableLambdaInstance(-1587894689, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    CanvasBasedWindow$composable(VOID, 'NGemini', VOID, VOID, ComposableSingletons$MainKt_getInstance().wh3_1);
    return Unit_instance;
  }
  function SystemAppearance$composable(isDark, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(898903738);
    if (!(($changed & 1) === 0) ? true : !$composer_0.y1j()) {
      if (isTraceInProgress()) {
        traceEventStart(898903738, $changed, -1, 'ui.theme.SystemAppearance$composable (Theme.js.kt:5)');
      }
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.j1k();
    }
    var tmp0_safe_receiver = $composer_0.f1k();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.y1z(SystemAppearance$composable$lambda(isDark, $changed));
    }
  }
  function SystemAppearance$composable$lambda($isDark, $$changed) {
    return function ($composer, $force) {
      SystemAppearance$composable($isDark, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function PlatformContext() {
    this.xh3_1 = 0;
  }
  function setupImagePicker($this) {
    var tmp = document;
    tmp.addEventListener('change', ImagePicker$setupImagePicker$lambda($this));
  }
  function ImagePicker$setupImagePicker$lambda$lambda(this$0) {
    return function (it) {
      var tmp0_safe_receiver = this$0.bh2_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(listOf(it));
      return Unit_instance;
    };
  }
  function ImagePicker$setupImagePicker$lambda(this$0) {
    return function (event) {
      var tmp = event.target;
      var input = tmp instanceof HTMLInputElement ? tmp : null;
      var tmp_0;
      if ((input == null ? null : input.id) === 'imageInput') {
        var files = input.files;
        var tmp2_safe_receiver = files == null ? null : asList(files);
        var tmp_1;
        if (tmp2_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_safe_receiver, 10));
          var tmp0_iterator = tmp2_safe_receiver.o();
          while (tmp0_iterator.d1()) {
            var item = tmp0_iterator.f1();
            readAsByteArray(item, ImagePicker$setupImagePicker$lambda$lambda(this$0));
            destination.a1(Unit_instance);
          }
          tmp_1 = destination;
        }
        var tmp3_elvis_lhs = tmp_1;
        var images = tmp3_elvis_lhs == null ? emptyList() : tmp3_elvis_lhs;
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ImagePicker$registerPicker$composable$lambda($tmp0_rcvr, $onImagePicked, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.dh2($onImagePicked, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ImagePicker() {
    this.bh2_1 = null;
    setupImagePicker(this);
    this.ch2_1 = 8;
  }
  protoOf(ImagePicker).eh2 = function () {
    var tmp0_safe_receiver = document.getElementById('imageInput');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ui.util.ImagePicker.pickImages.<anonymous>' call
      var tmp0_safe_receiver_0 = tmp0_safe_receiver instanceof HTMLInputElement ? tmp0_safe_receiver : null;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver_0.click();
        tmp = Unit_instance;
      }
    }
  };
  protoOf(ImagePicker).dh2 = function (onImagePicked, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.e1k(-328776978);
    if (isTraceInProgress()) {
      traceEventStart(-328776978, $changed, -1, 'ui.util.ImagePicker.registerPicker$composable (MultiImagePicker.js.kt:45)');
    }
    this.bh2_1 = onImagePicked;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.f1k();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.y1z(ImagePicker$registerPicker$composable$lambda(this, onImagePicked, $changed));
    }
  };
  function ImagePickerFactory(context) {
    this.fh3_1 = context;
    this.gh3_1 = 0;
  }
  protoOf(ImagePickerFactory).hh3 = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h1i(-1026624833);
    if (isTraceInProgress()) {
      traceEventStart(-1026624833, $changed, -1, 'ui.util.ImagePickerFactory.createPicker$composable (MultiImagePicker.js.kt:52)');
    }
    var tmp0 = new ImagePicker();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.j1i();
    return tmp0;
  };
  function readAsByteArray(_this__u8e3s4, callback) {
    var reader = new FileReader();
    reader.onload = readAsByteArray$lambda(callback, reader);
    reader.readAsArrayBuffer(_this__u8e3s4);
  }
  function getPlatformContext$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h1i(-1035261185);
    if (isTraceInProgress()) {
      traceEventStart(-1035261185, $changed, -1, 'ui.util.getPlatformContext$composable (MultiImagePicker.js.kt:15)');
    }
    var tmp0 = new PlatformContext();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.j1i();
    return tmp0;
  }
  function rememberBitmapFromBytes$composable(bytes, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.h1i(-154511347);
    if (isTraceInProgress()) {
      traceEventStart(-154511347, $changed, -1, 'ui.util.rememberBitmapFromBytes$composable (MultiImagePicker.js.kt:58)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.j1i();
    return null;
  }
  function readAsByteArray$lambda($callback, $reader) {
    return function (it) {
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0 = $reader.result;
      $callback(tmp$ret$0);
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf($serializer).v9j = typeParametersSerializers;
  protoOf($serializer_0).v9j = typeParametersSerializers;
  protoOf($serializer_1).v9j = typeParametersSerializers;
  protoOf($serializer_2).v9j = typeParametersSerializers;
  protoOf($serializer_3).v9j = typeParametersSerializers;
  protoOf($serializer_4).v9j = typeParametersSerializers;
  protoOf($serializer_5).v9j = typeParametersSerializers;
  protoOf($serializer_6).v9j = typeParametersSerializers;
  protoOf($serializer_7).v9j = typeParametersSerializers;
  protoOf($serializer_8).v9j = typeParametersSerializers;
  protoOf($serializer_9).v9j = typeParametersSerializers;
  protoOf($serializer_10).v9j = typeParametersSerializers;
  protoOf($serializer_11).v9j = typeParametersSerializers;
  protoOf($serializer_12).v9j = typeParametersSerializers;
  protoOf($serializer_13).v9j = typeParametersSerializers;
  protoOf($serializer_14).v9j = typeParametersSerializers;
  protoOf($serializer_15).v9j = typeParametersSerializers;
  //endregion
  //region block: init
  BuildKonfig_instance = new BuildKonfig();
  Companion_instance_7 = new Companion_5();
  Companion_instance_8 = new Companion_6();
  Companion_instance_12 = new Companion_10();
  Companion_instance_14 = new Companion_12();
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=NGemini-composeApp.js.map
