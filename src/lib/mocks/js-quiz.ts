import { Quiz } from 'src/types';

export const jsQuiz: Quiz[] = [
	{
		answer: 'مكان في الذاكرة بنخزن فيه Data وبيكون ليه اسم',
		level: 'junior',
		options: [
			'Code Block بيمشي بس مرة واحدة',
			'مكان في الذاكرة بنخزن فيه Data وبيكون ليه اسم',
			'Function بترجع Boolean دايمًا',
			'Operator بيجمع String مع Number',
		],
		term: 'يعني إيه Variable في JavaScript؟',
	},
	{
		answer:
			'الـ Variables والـ Functions بتترفع فوق في الـ Scope قبل ما الكود يتنفذ',
		level: 'junior',
		options: [
			'الـ Function بتتنفذ قبل ما تتكتب',
			'الـ Object بيتحول لـ Array',
			'الـ Number بيتحول لـ String',
			'الـ Variables والـ Functions بتترفع فوق في الـ Scope قبل ما الكود يتنفذ',
		],
		term: 'يعني إيه Hoisting في JavaScript؟',
	},
	{
		answer: 'المكان اللي الكود يقدر يشوف فيه Variable أو Function',
		level: 'junior',
		options: [
			'مكان تخزين الـ Data في الـ RAM',
			'المكان اللي الكود يقدر يشوف فيه Variable أو Function',
			'الـ Function اللي بتشتغل في Background',
			'Library خاصة بالـ DOM',
		],
		term: 'يعني إيه Scope في JavaScript؟',
	},
	{
		answer:
			'Function شايلة معاها الـ Scope اللي اتعملت فيه حتى بعد ما الـ Scope اتقفل',
		level: 'mid',
		options: [
			'Variable بيخزن Boolean بس',
			'Event بيشتغل مرة واحدة',
			'Function شايلة معاها الـ Scope اللي اتعملت فيه حتى بعد ما الـ Scope اتقفل',
			'طريقة لتخزين Data في الـ LocalStorage',
		],
		term: 'يعني إيه Closure في JavaScript؟',
	},
	{
		answer:
			'Object بيمثل عملية Asynchronous ممكن تبقى Pending أو Fulfilled أو Rejected',
		level: 'mid',
		options: [
			'Function لازم ترجع Error',
			'طريقة لتعريف Variable',
			'Object بيمثل عملية Asynchronous ممكن تبقى Pending أو Fulfilled أو Rejected',
			'Event بيشتغل جوة DOM',
		],
		term: 'يعني إيه Promise في JavaScript؟',
	},
	{
		answer:
			'الميكانيزم اللي بيخلي JavaScript Single Threaded بس يقدر يتعامل مع Async operations',
		level: 'mid',
		options: [
			'Loop عادي زي for أو while',
			'الميكانيزم اللي بيخلي JavaScript Single Threaded بس يقدر يتعامل مع Async operations',
			'Function بترجع Array',
			'Process لتشغيل الـ DOM بس',
		],
		term: 'يعني إيه Event Loop في JavaScript؟',
	},
	{
		answer:
			'Object كل Function أو Object بيتوارث منه خصائص (Inheritance mechanism)',
		level: 'mid',
		options: [
			'Variable ثابت مش بيتغير',
			'Event بيتكرر كل ثانية',
			'Type من الـ Data زي Number أو String',
			'Object كل Function أو Object بيتوارث منه خصائص (Inheritance mechanism)',
		],
		term: 'يعني إيه Prototype في JavaScript؟',
	},
	{
		answer: 'Reference للـ Object اللي الكود بيتنفذ في الـ Context بتاعه',
		level: 'mid',
		options: [
			'Pointer للـ Function اللي بعدها',
			'Variable ثابت بيتخزن في Global scope',
			'Event خاص بالـ DOM',
			'Reference للـ Object اللي الكود بيتنفذ في الـ Context بتاعه',
		],
		term: 'يعني إيه this Keyword في JavaScript؟',
	},
	{
		answer:
			'Syntax بيسهل كتابة الكود الـ Asynchronous بدل ما نستخدم Promise chaining',
		level: 'senior',
		options: [
			'Loop شغال دايمًا',
			'Function بتمنع Error',
			'Operator بيجمع Strings',
			'Syntax بيسهل كتابة الكود الـ Asynchronous بدل ما نستخدم Promise chaining',
		],
		term: 'يعني إيه Async/Await في JavaScript؟',
	},
	{
		answer:
			'إننا نربط Event Listener على Parent بدل كل Child عشان الأداء يبقى أحسن',
		level: 'senior',
		options: [
			'Event بيشتغل مره واحدة بس',
			'إننا نربط Event Listener على Parent بدل كل Child عشان الأداء يبقى أحسن',
			'طريقة لمنع الـ Default Behavior',
			'Function بتكرر نفسها',
		],
		term: 'يعني إيه Event Delegation في JavaScript؟',
	},
	{
		answer: 'التصنيف اللي بيحدد نوع الـ Value زي Number, String, Boolean',
		level: 'junior',
		options: [
			'طريقة لكتابة Loop',
			'Function بتتعامل مع DOM',
			'التصنيف اللي بيحدد نوع الـ Value زي Number, String, Boolean',
			'Event بيتكرر بشكل دوري',
		],
		term: 'يعني إيه Data Type في JavaScript؟',
	},
	{
		answer:
			'== بيعمل مقارنة مع Type Coercion و === بيعمل مقارنة Strict من غير تحويل',
		level: 'junior',
		options: [
			'الاتنين زي بعض بالظبط',
			'=== بيشتغل مع Strings بس',
			'== بيعمل مقارنة مع Type Coercion و === بيعمل مقارنة Strict من غير تحويل',
			'== بيشتغل مع Objects بس',
		],
		term: 'يعني إيه الفرق بين == و === في JavaScript؟',
	},
	{
		answer: 'Block من الكود بيتنادى علشان ينفذ مهمة معينة',
		level: 'junior',
		options: [
			'Object ثابت بيتخزن في الذاكرة',
			'Block من الكود بيتنادى علشان ينفذ مهمة معينة',
			'Data Type زي Number',
			'Event Loop',
		],
		term: 'يعني إيه Function في JavaScript؟',
	},
	{
		answer: 'Data Structure بتخزن Values وبتتحفظ بترتيب Index',
		level: 'junior',
		options: [
			'Data Structure بتخزن Values وبتتحفظ بترتيب Index',
			'Object ليه Properties',
			'Function بتشتغل Asynchronous',
			'Event خاص بالـ DOM',
		],
		term: 'يعني إيه Array في JavaScript؟',
	},
	{
		answer: 'Collection من Key-Value Pairs بتخزن Data أو Functions',
		level: 'junior',
		options: [
			'Loop بيتكرر',
			'Collection من Key-Value Pairs بتخزن Data أو Functions',
			'Function من غير Return',
			'Data Type زي Boolean',
		],
		term: 'يعني إيه Object في JavaScript؟',
	},
	{
		answer:
			'Function بتتبعت كـ Parameter لـ Function تانية وتتنده بعد ما المهمة تخلص',
		level: 'mid',
		options: [
			'Variable ثابت مش بيتغير',
			'Event خاص بالـ Browser',
			'Loop متكرر',
			'Function بتتبعت كـ Parameter لـ Function تانية وتتنده بعد ما المهمة تخلص',
		],
		term: 'يعني إيه Callback Function في JavaScript؟',
	},
	{
		answer: 'إن الـ Event يبدأ من العنصر الداخلي ويطلع لفوق لحد الـ Parent',
		level: 'mid',
		options: [
			'إن الـ Event يشتغل مرة واحدة بس',
			'إن الـ Event يبدأ من العنصر الداخلي ويطلع لفوق لحد الـ Parent',
			'إن الـ Event يتخزن في Queue',
			'إن الكود يتنفذ قبل الـ DOM ما يجهز',
		],
		term: 'يعني إيه Event Bubbling في JavaScript؟',
	},
	{
		answer: 'Syntax بنستعمله عشان نطلع Values من Array أو Object بسهولة',
		level: 'mid',
		options: [
			'Function بتمنع Error',
			'Syntax بنستعمله عشان نطلع Values من Array أو Object بسهولة',
			'Operator بيحول Number لـ String',
			'Loop جديد زي for',
		],
		term: 'يعني إيه Destructuring في JavaScript؟',
	},
	{
		answer:
			'تقسيم Function بتاخد كذا Parameter لسلسلة Functions كل واحدة بتاخد Parameter واحد',
		level: 'senior',
		options: [
			'Loop متداخل',
			'تقسيم Function بتاخد كذا Parameter لسلسلة Functions كل واحدة بتاخد Parameter واحد',
			'Event بيكرر نفسه',
			'طريقة لتخزين Data في Cookies',
		],
		term: 'يعني إيه Currying في JavaScript؟',
	},
	{
		answer:
			'إن الـ Application يحتفظ بـ References لبيانات مش محتاجها فـ Memory ما بتتفضاش',
		level: 'senior',
		options: [
			'إن الـ Application يحتفظ بـ References لبيانات مش محتاجها فـ Memory ما بتتفضاش',
			'لما الكود يتنفذ مرتين',
			'لما Array يبقى فاضي',
			'Event Loop يقف',
		],
		term: 'يعني إيه Memory Leak في JavaScript؟',
	},
	{
		answer:
			'طريقة لكتابة Strings باستخدام Backticks ونقدر نحط جواها Variables أو Expressions',
		level: 'junior',
		options: [
			'طريقة لكتابة Strings باستخدام Backticks ونقدر نحط جواها Variables أو Expressions',
			'Data Type جديد للـ Numbers',
			'Loop خاص بالـ Arrays',
			'Event مرتبط بالـ DOM',
		],
		term: 'يعني إيه Template Literal في JavaScript؟',
	},
	{
		answer:
			'null قيمة مقصودة فاضية، لكن undefined معناها إن الـ Variable اتعرف ومخدش Value',
		level: 'junior',
		options: [
			'الاتنين نفس الحاجة بالظبط',
			'undefined نوع من الـ Object',
			'null بترجع Error لو استخدمناها',
			'null قيمة مقصودة فاضية، لكن undefined معناها إن الـ Variable اتعرف ومخدش Value',
		],
		term: 'يعني إيه الفرق بين null و undefined في JavaScript؟',
	},
	{
		answer: 'Function بتاخد Function تانية كـ Parameter أو بترجع Function',
		level: 'mid',
		options: [
			'Function بترجع String بس',
			'Loop خاص بالـ Arrays',
			'Function بتاخد Function تانية كـ Parameter أو بترجع Function',
			'Data Type مختلف',
		],
		term: 'يعني إيه Higher-Order Function في JavaScript؟',
	},
	{
		answer: 'Function بتتكتب وتتنفذ في نفس اللحظة من غير ما ننده عليها بعدين',
		level: 'mid',
		options: [
			'Function لازم تستنى Event',
			'Function بتتكتب وتتنفذ في نفس اللحظة من غير ما ننده عليها بعدين',
			'Loop شغال بشكل لا نهائي',
			'Object بيتعامل مع الـ DOM',
		],
		term: 'يعني إيه IIFE (Immediately Invoked Function Expression)؟',
	},
	{
		answer:
			'Mutable ممكن نغير قيمتها زي Arrays و Objects، Immutable زي String و Number ما يتغيروش بعد ما يتعملوا',
		level: 'mid',
		options: [
			'Mutable ممكن نغير قيمتها زي Arrays و Objects، Immutable زي String و Number ما يتغيروش بعد ما يتعملوا',
			'الاتنين نفس المعنى',
			'Immutable معناها Private Variable',
			'Mutable معناها Value بتتخزن في Global Scope',
		],
		term: 'يعني إيه Mutable و Immutable Data في JavaScript؟',
	},
	{
		answer:
			'طريقة لتنظيم الكود بملفات منفصلة ونقدر نعمل Import/Export بين الملفات',
		level: 'mid',
		options: [
			'طريقة لتنظيم الكود بملفات منفصلة ونقدر نعمل Import/Export بين الملفات',
			'Event بيشتغل على الـ DOM',
			'Variable بيتخزن في Memory',
			'Loop جديد في ECMAScript',
		],
		term: 'يعني إيه Module System في JavaScript؟',
	},
	{
		answer:
			'الميكانيزم اللي بيشيل الـ Data اللي مابقاش عليها Reference من الـ Memory',
		level: 'senior',
		options: [
			'Function خاصة بتنضيف Strings',
			'Loop بيوقف الكود',
			'الميكانيزم اللي بيشيل الـ Data اللي مابقاش عليها Reference من الـ Memory',
			'Operator جديد في ES6',
		],
		term: 'يعني إيه Garbage Collection في JavaScript؟',
	},
	{
		answer: 'الـ Structure اللي بيتخزن فيه ترتيب استدعاء الـ Functions',
		level: 'senior',
		options: [
			'Array خاصة بالـ DOM',
			'الـ Structure اللي بيتخزن فيه ترتيب استدعاء الـ Functions',
			'Loop بيتكرر بشكل لا نهائي',
			'Operator بيعمل Addition',
		],
		term: 'يعني إيه Call Stack في JavaScript؟',
	},
	{
		answer:
			'Shallow Copy بينسخ Reference بس للـ Object، Deep Copy بينسخ كل القيم حتى المتداخلة',
		level: 'senior',
		options: [
			'Shallow Copy بينسخ Reference بس للـ Object، Deep Copy بينسخ كل القيم حتى المتداخلة',
			'Deep Copy بيشتغل مع Numbers بس',
			'Shallow Copy نوع من Loops',
			'الاتنين نفس الحاجة',
		],
		term: 'يعني إيه Shallow Copy مقابل Deep Copy في JavaScript؟',
	},
	{
		answer:
			'إن الـ Event يبدأ من العنصر الأب وينزل للعنصر الابن (العكس من Bubbling)',
		level: 'senior',
		options: [
			'إن الـ Event يشتغل مرة واحدة',
			'Loop خاص بالـ Arrays',
			'طريقة لتخزين Data',
			'إن الـ Event يبدأ من العنصر الأب وينزل للعنصر الابن (العكس من Bubbling)',
		],
		term: 'يعني إيه Event Capturing في JavaScript؟',
	},
	{
		answer: 'قيم بتتفسر كـ true أو false لما تتحط في شرط',
		level: 'junior',
		options: [
			'Functions بترجع Boolean',
			'قيم بتتفسر كـ true أو false لما تتحط في شرط',
			'Operators خاصة بالـ Numbers',
			'Events خاصة بالـ DOM',
		],
		term: 'يعني إيه Truthy و Falsy Values في JavaScript؟',
	},
	{
		answer:
			'var ليها Function Scope وبتعمل Hoisting، let و const ليهم Block Scope و const ما ينفعش نغير قيمتها',
		level: 'junior',
		options: [
			'var أسرع من const',
			'let بيشتغل بس مع Arrays',
			'const معناه Global Variable',
			'var ليها Function Scope وبتعمل Hoisting، let و const ليهم Block Scope و const ما ينفعش نغير قيمتها',
		],
		term: 'يعني إيه الفرق بين var و let و const؟',
	},
	{
		answer: 'Function بتتربط بعنصر في الـ DOM عشان تشتغل لما يحصل Event معين',
		level: 'junior',
		options: [
			'Variable بيتخزن في الـ Global Scope',
			'Function بتتربط بعنصر في الـ DOM عشان تشتغل لما يحصل Event معين',
			'Loop بيكرر نفسه',
			'Operator بيجمع Strings',
		],
		term: 'يعني إيه Event Listener في JavaScript؟',
	},
	{
		answer: 'Syntax بيسمح بفرد الـ Array أو Object في مكان جديد',
		level: 'mid',
		options: [
			'Operator بيجمع Numbers',
			'Syntax بيسمح بفرد الـ Array أو Object في مكان جديد',
			'Loop بيشتغل مع Strings',
			'Event خاص بالـ DOM',
		],
		term: 'يعني إيه Spread Operator (...) في JavaScript؟',
	},
	{
		answer: 'Syntax بيجمع أي عدد من الـ Arguments في Array جوة Function',
		level: 'mid',
		options: [
			'Operator بيطرح Numbers',
			'Loop بيوقف الكود',
			'Syntax بيجمع أي عدد من الـ Arguments في Array جوة Function',
			'Event بيكرر نفسه',
		],
		term: 'يعني إيه Rest Parameter (...) في JavaScript؟',
	},
	{
		answer:
			'Data Structures: Map لتخزين Key-Value Pairs بأي نوع، و Set لتخزين Values مميزة من غير تكرار',
		level: 'mid',
		options: [
			'Data Structures: Map لتخزين Key-Value Pairs بأي نوع، و Set لتخزين Values مميزة من غير تكرار',
			'Functions خاصة بالـ Arrays',
			'Events بتشتغل على DOM',
			'Operators في ES6',
		],
		term: 'يعني إيه Map و Set في JavaScript؟',
	},
	{
		answer: 'البيئة اللي الكود بيتنفذ فيها واللي بتحدد قيمة this والـ Scope',
		level: 'senior',
		options: [
			'Loop بيتخزن في Memory',
			'البيئة اللي الكود بيتنفذ فيها واللي بتحدد قيمة this والـ Scope',
			'Object ثابت',
			'Event خاص بالـ Window',
		],
		term: 'يعني إيه Execution Context في JavaScript؟',
	},
	{
		answer:
			'Methods بتتحكم في قيمة this لما ننادي على Function، وبتحدد إزاي نمرر Arguments',
		level: 'senior',
		options: [
			'Operators جديدة',
			'Loops في ES6',
			'Functions خاصة بالـ DOM',
			'Methods بتتحكم في قيمة this لما ننادي على Function، وبتحدد إزاي نمرر Arguments',
		],
		term: 'يعني إيه Call, Apply, و Bind Methods في JavaScript؟',
	},
	{
		answer:
			'target هو العنصر اللي بدأ منه Event، و currentTarget هو العنصر اللي مربوط عليه الـ Listener',
		level: 'senior',
		options: [
			'الاتنين نفس الحاجة',
			'target هو العنصر اللي بدأ منه Event، و currentTarget هو العنصر اللي مربوط عليه الـ Listener',
			'target بيتعامل مع Arrays',
			'currentTarget نوع من الـ Scope',
		],
		term: 'يعني إيه Event Target و CurrentTarget في JavaScript؟',
	},
	{
		answer:
			'Microtask Queue بتاخد أولويات أعلى (زي Promise callbacks)، و Callback Queue بتتأخر شوية (زي setTimeout)',
		level: 'senior',
		options: [
			'الاتنين نفس الحاجة',
			'Callback Queue أسرع من Microtask Queue دايمًا',
			'Microtask Queue بتاخد أولويات أعلى (زي Promise callbacks)، و Callback Queue بتتأخر شوية (زي setTimeout)',
			'Microtask Queue خاصة بالـ DOM Events',
		],
		term: 'يعني إيه Microtask Queue مقابل Callback Queue في JavaScript؟',
	},
	{
		answer:
			"Operator بيرجع نوع الـ Value كـ String زي 'string', 'number', 'object'",
		level: 'junior',
		options: [
			'Function خاصة بالـ DOM',
			'Loop جديد',
			'Operator بيجمع بين قيمتين',
			"Operator بيرجع نوع الـ Value كـ String زي 'string', 'number', 'object'",
		],
		term: 'يعني إيه typeof Operator في JavaScript؟',
	},
	{
		answer: 'قيمة معناها Not-a-Number بتظهر لما عملية حسابية ما تطلعش Number',
		level: 'junior',
		options: [
			'Variable ثابت',
			'Function خاصة بالـ Math',
			'Operator جديد',
			'قيمة معناها Not-a-Number بتظهر لما عملية حسابية ما تطلعش Number',
		],
		term: 'يعني إيه NaN في JavaScript؟',
	},
	{
		answer:
			'for...in بيلف على Keys في Object، for...of بيلف على Values في Array أو Iterable',
		level: 'junior',
		options: [
			'الاتنين زي بعض بالظبط',
			'for...of للـ Objects بس',
			'for...in بيلف على Keys في Object، for...of بيلف على Values في Array أو Iterable',
			'for...in للـ Arrays بس',
		],
		term: 'يعني إيه الفرق بين for...in و for...of في JavaScript؟',
	},
	{
		answer: 'قيمة افتراضية للـ Parameter في Function لو ما جاش Argument',
		level: 'junior',
		options: [
			'Variable ثابت',
			'قيمة افتراضية للـ Parameter في Function لو ما جاش Argument',
			'Loop متكرر',
			'Event خاص بالـ DOM',
		],
		term: 'يعني إيه Default Parameter في JavaScript؟',
	},
	{
		answer: 'Function بترجع نفس النتيجة مع نفس الـ Inputs ومفيهاش Side Effects',
		level: 'mid',
		options: [
			'Function بتشتغل مرة واحدة بس',
			'Function بتخزن Data في Global Scope',
			'Function بترجع نفس النتيجة مع نفس الـ Inputs ومفيهاش Side Effects',
			'Event Loop جديد',
		],
		term: 'يعني إيه Pure Function في JavaScript؟',
	},
	{
		answer: 'لما Function تغير حاجة برة نطاقها زي تعديل Global Variable أو DOM',
		level: 'mid',
		options: [
			'لما Function تغير حاجة برة نطاقها زي تعديل Global Variable أو DOM',
			'لما Function ترجع Boolean',
			'Event خاص بالـ Browser',
			'Loop لا نهائي',
		],
		term: 'يعني إيه Side Effect في JavaScript؟',
	},
	{
		answer:
			'كود بيضيف Feature جديدة في JavaScript للـ Browsers القديمة اللي مش بتدعمها',
		level: 'mid',
		options: [
			'Library للـ CSS',
			'Loop خاص بالـ Arrays',
			'Operator في ES6',
			'كود بيضيف Feature جديدة في JavaScript للـ Browsers القديمة اللي مش بتدعمها',
		],
		term: 'يعني إيه Polyfill في JavaScript؟',
	},
	{
		answer: 'تقنية بتخلي للـ Component DOM خاص بيه معزول عن الـ DOM الأساسي',
		level: 'senior',
		options: [
			'Event جديد',
			'Loop داخل Array',
			'تقنية بتخلي للـ Component DOM خاص بيه معزول عن الـ DOM الأساسي',
			'Type من الـ Object',
		],
		term: 'يعني إيه Shadow DOM في JavaScript؟',
	},
	{
		answer:
			'تقنية بتأخر تنفيذ Function لحد ما المستخدم يوقف التفاعل فترة معينة',
		level: 'senior',
		options: [
			'تقنية بتأخر تنفيذ Function لحد ما المستخدم يوقف التفاعل فترة معينة',
			'Loop جديد',
			'Event خاص بالـ Keyboard',
			'Function بترجع Boolean',
		],
		term: 'يعني إيه Debouncing في JavaScript؟',
	},
	{
		answer:
			'تقنية بتخلي Function تتنفذ كل فترة زمنية ثابتة حتى لو التفاعل متكرر',
		level: 'senior',
		options: [
			'Event خاص بالـ Mouse',
			'Function خاصة بالـ DOM',
			'Loop متداخل',
			'تقنية بتخلي Function تتنفذ كل فترة زمنية ثابتة حتى لو التفاعل متكرر',
		],
		term: 'يعني إيه Throttling في JavaScript؟',
	},
	{
		answer:
			'undefined معناها إن الـ Variable اتعمله Declare من غير ما يتحددله قيمة، إنما null معناها قيمة متعمدة فاضية محطوطة بإيدك',
		level: 'junior',
		options: [
			'الاتنين شبه بعض بالظبط، وبيستخدموا مكان بعض عادي بدون أي اختلاف',
			'undefined معناها إن الـ Variable اتعمله Declare من غير ما يتحددله قيمة، إنما null معناها قيمة متعمدة فاضية محطوطة بإيدك',
			'undefined معناها Variable متخزن في LocalStorage، و null معناها متخزن في SessionStorage',
			'undefined بيرجع من Function دايمًا، و null بيرجع من Object بس',
		],
		term: 'إيه الفرق بين null و undefined في JavaScript؟',
	},
	{
		answer:
			'== بيعمل مقارنة مع Type Conversion، أما === بيقارن من غير ما يغير الـ Type وبيتحقق من القيمة والنوع مع بعض',
		level: 'junior',
		options: [
			'== بيستخدم مع الأرقام بس، و === بيستخدم مع الـ Strings',
			'== بيعمل Compare على طول من غير أي حسابات، و === بيضيف Conversion بشكل تلقائي',
			'== بيعمل مقارنة مع Type Conversion، أما === بيقارن من غير ما يغير الـ Type وبيتحقق من القيمة والنوع مع بعض',
			'== و === الاتنين نفس الحاجة بالظبط ومفيش بينهم أي فرق حقيقي',
		],
		term: 'إيه الفرق بين == و === في JavaScript؟',
	},
	{
		answer:
			'آلية JavaScript بترفع تعريف الـ Variables والـ Functions لأعلى الـ Scope قبل التنفيذ، فممكن تستخدمهم قبل ما يتكتبوا',
		level: 'junior',
		options: [
			'عملية بتحصل لما المتصفح يعمل Optimize للكود ويشيل الـ Functions اللي مالهاش لازمة',
			'آلية JavaScript بترفع تعريف الـ Variables والـ Functions لأعلى الـ Scope قبل التنفيذ، فممكن تستخدمهم قبل ما يتكتبوا',
			'تقنية بتخلي الكود يشتغل أسرع عن طريق تحميل كل الـ Functions في البداية بس',
			'مصطلح بيتقال على إن الـ CSS Styles بتترفع للأعلى قبل ما يتطبق JavaScript',
		],
		term: 'يعني إيه Hoisting في JavaScript؟',
	},
	{
		answer:
			'let بتشتغل بالـ Block Scope، إنما var بتشتغل بالـ Function Scope وبتعمل Hoisting',
		level: 'junior',
		options: [
			'let أسرع في التنفيذ دايمًا عن var ومش بتستهلك Memory كتير',
			'let بتشتغل بالـ Block Scope، إنما var بتشتغل بالـ Function Scope وبتعمل Hoisting',
			'let مخصوص للأرقام و var مخصوص للـ Strings والـ Objects',
			'let بتشتغل جوه Async Functions بس، إنما var بتشتغل في أي مكان',
		],
		term: 'إيه الفرق بين let و var؟',
	},
	{
		answer:
			'Function بتتكتب وتتنفذ فورًا من غير ما تتنده عليها تاني، وبتساعد تعزل الـ Scope',
		level: 'mid',
		options: [
			'Function بتتكتب وتتنفذ فورًا من غير ما تتنده عليها تاني، وبتساعد تعزل الـ Scope',
			'Function بتتخزن في Memory من غير ما تتنفذ وبتتسجل كـ Callback',
			'Function بتتسجل في Global Scope وبتشتغل تلقائيًا مع أي Event في الصفحة',
			'Function بتتكتب جوه Class بس ومينفعش تتنده من بره',
		],
		term: 'يعني إيه IIFE (Immediately Invoked Function Expression)؟',
	},
	{
		answer:
			'Shallow Copy بينسخ الـ Object من غير ما ينسخ الـ Objects اللي جواه (بياخد نفس الـ References)، إنما Deep Copy بينسخ كل حاجة حتى الـ Nested Objects',
		level: 'mid',
		options: [
			'Shallow Copy بيشتغل بس مع الـ Arrays، و Deep Copy بيشتغل بس مع الـ Objects',
			'Shallow Copy بينسخ الـ Object من غير ما ينسخ الـ Objects اللي جواه (بياخد نفس الـ References)، إنما Deep Copy بينسخ كل حاجة حتى الـ Nested Objects',
			'Shallow Copy بيستهلك Memory أكتر بكتير من Deep Copy وبيكون أبطأ',
			'Shallow Copy بيرجع قيمة null لو فيه أي Nested Object، إنما Deep Copy بيحذف الـ Nested خالص',
		],
		term: 'إيه الفرق بين Shallow Copy و Deep Copy؟',
	},
	{
		answer:
			'الاتنين بيغيروا الـ this context للـ Function، Call بياخد Arguments عادي، Apply بياخدهم كـ Array',
		level: 'mid',
		options: [
			'Call بيتعامل مع الـ DOM Elements بس، و Apply بيتعامل مع الـ Arrays',
			'Call بترجع Promise، أما Apply بترجع Observable',
			'Call بتشتغل في المتصفح بس، و Apply بتشتغل في الـ Node.js',
			'الاتنين بيغيروا الـ this context للـ Function، Call بياخد Arguments عادي، Apply بياخدهم كـ Array',
		],
		term: 'إيه الفرق بين Call و Apply في JavaScript؟',
	},
	{
		answer:
			'آلية بتنظم تنفيذ الكود Sync و Async، وبتخلي الـ Call Stack يشتغل مع الـ Callback Queue والـ Microtasks',
		level: 'senior',
		options: [
			'Process في المتصفح بيشغل Events الخاصة بالـ CSS قبل JavaScript',
			'آلية بتنظم تنفيذ الكود Sync و Async، وبتخلي الـ Call Stack يشتغل مع الـ Callback Queue والـ Microtasks',
			'آلية بتخزن كل الـ Events في Array وبتنفذهم كلهم مرة واحدة في آخر الكود',
			'Function جاهزة جوه JavaScript بترجع عدد الأحداث اللي لسه متسجلة',
		],
		term: 'إيه هو Event Loop في JavaScript؟',
	},
	{
		answer:
			'آلية بتخلي Function تحتفظ بالـ Scope اللي اتعملت فيه حتى بعد ما الـ Scope ده يخلص',
		level: 'senior',
		options: [
			'Function عادية بتتكتب جوا Object وتتنفذ كـ Method',
			'آلية بتخلي Function تحتفظ بالـ Scope اللي اتعملت فيه حتى بعد ما الـ Scope ده يخلص',
			'Variable بيتخزن في Global Scope وممكن يتنده من أي مكان',
			'Event خاص بالـ Window بيتسجل تلقائيًا لكل Function',
		],
		term: 'إيه هو Closure في JavaScript؟',
	},
	{
		answer:
			'setTimeout بينفذ الكود بعد وقت معين (حتى لو 0ms بيروح للـ Task Queue)، أما setImmediate بيتنفذ بعد الـ I/O Events على طول',
		level: 'senior',
		options: [
			'setTimeout بيشتغل جوه المتصفح بس، أما setImmediate بيشتغل في الـ Browser والـ Node.js مع بعض',
			'setTimeout بينفذ الكود فورًا، أما setImmediate بيخليه يتأخر للـ Microtask Queue',
			'setTimeout بينفذ الكود بعد وقت معين (حتى لو 0ms بيروح للـ Task Queue)، أما setImmediate بيتنفذ بعد الـ I/O Events على طول',
			'setTimeout مخصص للـ DOM Events، أما setImmediate مخصص للـ File System Events',
		],
		term: 'إيه الفرق بين setTimeout و setImmediate في JavaScript؟',
	},
	{
		answer:
			'هي الفترة بين تعريف variable بـ let أو const وبين لحظة ما يتعمله Initialize، وأي Access ليه في الوقت ده بيعمل Error',
		level: 'mid',
		options: [
			'هي المنطقة في الكود اللي المتصفح ما بيفهمهاش وبيتجاهلها خالص',
			'هي الفترة بين تعريف variable بـ let أو const وبين لحظة ما يتعمله Initialize، وأي Access ليه في الوقت ده بيعمل Error',
			'هي Memory خاصة للـ Global Variables بتكون محجوزة في بداية البرنامج',
			'هي طريقة JavaScript في منع الـ Functions إنها تشتغل قبل الـ Event Loop ما يخلص',
		],
		term: 'يعني إيه Temporal Dead Zone (TDZ)؟',
	},
	{
		answer:
			'Function بتستخدم keyword function* وبتسمح توقف وتكمل التنفيذ باستخدام yield',
		level: 'senior',
		options: [
			'Function بتولد Random Numbers بشكل تلقائي كل مرة',
			'Function بتستخدم keyword function* وبتسمح توقف وتكمل التنفيذ باستخدام yield',
			'Function خاصة بالـ Async فقط، ومينفعش تشتغل غير مع await',
			'Function بتتكرر تلقائيًا في Loop من غير ما تنده عليها',
		],
		term: 'إيه هو Generator Function في JavaScript؟',
	},
	{
		answer:
			'Object بيديك إمكانية تتحكم في عمليات أساسية زي get و set على Objects تانية',
		level: 'senior',
		options: [
			'Object محجوز للـ Network Requests بس',
			'Object بيتخزن في IndexedDB تلقائيًا من غير كود إضافي',
			'Object بيديك إمكانية تتحكم في عمليات أساسية زي get و set على Objects تانية',
			'Object بيشتغل بس مع الـ Classes ومينفعش تستخدمه مع Arrays',
		],
		term: 'إيه هو Proxy Object في JavaScript؟',
	},
	{
		answer:
			'WeakMap مفاتيحه لازم تبقى Objects، وبيتم مسحها أوتوماتيك من الـ Garbage Collector لو مفيش Reference ليها',
		level: 'mid',
		options: [
			'WeakMap بيشتغل أسرع من Map دايمًا في كل الحالات',
			'WeakMap مفاتيحه لازم تبقى Objects، وبيتم مسحها أوتوماتيك من الـ Garbage Collector لو مفيش Reference ليها',
			'WeakMap بيشتغل جوه المتصفح بس، و Map بيشتغل في الـ Node.js',
			'WeakMap بيخزن Data على شكل Array، إنما Map بيخزن Data على شكل Object',
		],
		term: 'إيه الفرق بين Map و WeakMap؟',
	},
	{
		answer:
			'for...of بتلف على القيم Values في Iterable زي Array أو String، إنما for...in بتلف على المفاتيح Keys في Object',
		level: 'junior',
		options: [
			'for...of بتشتغل بس مع Numbers، و for...in مع Strings',
			'for...of بتشتغل جوه Async Functions بس، و for...in بتشتغل في العادي',
			'for...of أسرع من for...in في أي حالة وأكتر استخدامًا',
			'for...of بتلف على القيم Values في Iterable زي Array أو String، إنما for...in بتلف على المفاتيح Keys في Object',
		],
		term: 'إيه الفرق بين for...of و for...in؟',
	},
	{
		answer:
			'تقنية بتحول Function بتاخد أكتر من Argument لـ Functions متسلسلة كل واحدة تاخد Argument واحد',
		level: 'senior',
		options: [
			'عملية JavaScript بتقسم الـ Array لنصين أو أكتر',
			'تقنية بتحول Function بتاخد أكتر من Argument لـ Functions متسلسلة كل واحدة تاخد Argument واحد',
			'طريقة لتكرار Function كل فترة زمنية معينة',
			'Keyword جديدة في ES6 بتخلي Functions تتعرف أسرع',
		],
		term: 'إيه هو Currying في JavaScript؟',
	},
	{
		answer:
			'طريقة لتنظيم الكود باستخدام Closures علشان تعمل Data Encapsulation وتخلي فيه Public/Private methods',
		level: 'mid',
		options: [
			'Style جاهز في CSS Modules عشان تدي أسماء Classes فريدة',
			'طريقة لتقسيم الـ Database Tables لـ Modules منفصلة',
			'طريقة لتنظيم الكود باستخدام Closures علشان تعمل Data Encapsulation وتخلي فيه Public/Private methods',
			'تقنية خاصة بالـ Node.js بس ومينفعش تتطبق في المتصفح',
		],
		term: 'إيه هو Module Pattern؟',
	},
	{
		answer:
			'آلية بتسمح تعمل DOM منعزل جوه Component من غير ما يتأثر بالـ CSS أو الـ JS الخارجي',
		level: 'senior',
		options: [
			'DOM بيتخزن في LocalStorage بشكل مخفي',
			'آلية بتسمح تعمل DOM منعزل جوه Component من غير ما يتأثر بالـ CSS أو الـ JS الخارجي',
			'DOM خاص بـ Node.js بيتعامل مع الملفات بدل العناصر',
			'DOM نسخة مؤقتة بتظهر بس في وضع الـ Debugging',
		],
		term: 'إيه هو Shadow DOM؟',
	},
	{
		answer:
			'synchronous بيتنفذ خطوة بخطوة واحدة ورا التانية، asynchronous ممكن يوقف شغل معين ويكمل حاجات تانية في نفس الوقت',
		level: 'junior',
		options: [
			'synchronous بيتنفذ خطوة بخطوة واحدة ورا التانية، asynchronous ممكن يوقف شغل معين ويكمل حاجات تانية في نفس الوقت',
			'synchronous بيحتاج Server دايمًا، asynchronous بيشتغل في المتصفح بس',
			'synchronous بيشتغل مع الـ Database Queries بس، asynchronous بيشتغل مع الـ APIs',
			'synchronous بيشتغل بالـ Classes، asynchronous بيشتغل بالـ Functions بس',
		],
		term: 'إيه الفرق بين synchronous و asynchronous code؟',
	},
	{
		answer:
			'تقنية بتخزن نتيجة Function Input معينة علشان لو اتندهت بنفس المدخلات تاني، ترجع النتيجة من الكاش بدل إعادة الحساب',
		level: 'mid',
		options: [
			'تقنية بتخزن نتيجة Function Input معينة علشان لو اتندهت بنفس المدخلات تاني، ترجع النتيجة من الكاش بدل إعادة الحساب',
			'خاصية في LocalStorage بتخزن البيانات للأبد ومتمسحش',
			'Event في JavaScript بيتسجل تلقائيًا لأي Function فيها Loop',
			'مكتبة جاهزة في JavaScript مسؤولة عن إدارة Memory بشكل يدوي',
		],
		term: 'إيه هو Memoization؟',
	},
	{
		answer:
			'هي طريقة تاخد Values من Array أو Properties من Object وتخزنها في Variables بشكل سريع ومباشر',
		level: 'junior',
		options: [
			'هي Function خاصة بتكسر الـ String لحروف منفصلة وتتخزن في Array',
			'هي طريقة تاخد Values من Array أو Properties من Object وتخزنها في Variables بشكل سريع ومباشر',
			'هي عملية بتخلي الـ Browser يوزع الكود على CPU Cores مختلفة',
			'هي Method في JSON بتحول أي Object لواحد فاضي',
		],
		term: 'يعني إيه Destructuring في JavaScript؟',
	},
	{
		answer:
			'Syntax بيسمح تنسخ عناصر Array أو Properties من Object وتفردها في مكان جديد',
		level: 'junior',
		options: [
			'Operator بيضاعف أي قيمة رقمية في JavaScript',
			'Function جاهزة بتكرر String لحد ما توصل لطول معين',
			'Keyword خاصة بتعريف Variables في Global Scope',
			'Syntax بيسمح تنسخ عناصر Array أو Properties من Object وتفردها في مكان جديد',
		],
		term: 'إيه هو Spread Operator (...)؟',
	},
	{
		answer:
			'async/await مجرد Syntax أبسط للـ Promises، وبيخلي الكود شكله زي الـ synchronous',
		level: 'mid',
		options: [
			'async/await نوع جديد من الـ Threads بيشتغل جوه JavaScript',
			'async/await مجرد Syntax أبسط للـ Promises، وبيخلي الكود شكله زي الـ synchronous',
			'async/await أبطأ من Promises ومش مدعوم في كل المتصفحات',
			'Promises بتشتغل بس مع Arrays، إنما async/await بتشتغل مع Objects',
		],
		term: 'إيه الفرق بين async/await و Promises؟',
	},
	{
		answer:
			'Operator بيخليك توصل لخاصية جوه Object أو Array من غير ما تعمل Checks على كل مستوى، ولو مش موجود يرجع undefined',
		level: 'mid',
		options: [
			'Operator بيعمل Check إذا كان الرقم Even أو Odd',
			'Operator بيخليك توصل لخاصية جوه Object أو Array من غير ما تعمل Checks على كل مستوى، ولو مش موجود يرجع undefined',
			'Operator بيخلي أي Variable يتحول لـ Boolean أوتوماتيك',
			'Operator خاص بالـ TypeScript بس ومينفعش يشتغل في JavaScript',
		],
		term: 'إيه هو Optional Chaining (?.)؟',
	},
	{
		answer: 'Operator بيرجع القيمة اليمين لو الشمال كان null أو undefined بس',
		level: 'mid',
		options: [
			"Operator بيرجع القيمة اليمين في حالة أي Falsy Value زي 0 أو ''",
			'Operator جديد بيحول أي Object لـ JSON String',
			'Operator بيعمل Merge تلقائي بين Arrays مختلفة',
			'Operator بيرجع القيمة اليمين لو الشمال كان null أو undefined بس',
		],
		term: 'إيه هو Nullish Coalescing Operator (??)؟',
	},
	{
		answer:
			'import العادي بيشتغل في بداية الملف بشكل ثابت، أما dynamic import() بيحمل Modules وقت التشغيل بشكل Lazy',
		level: 'senior',
		options: [
			'import العادي بيشتغل بس في المتصفح، و dynamic import() بيشتغل بس في Node.js',
			'import العادي بيشتغل في بداية الملف بشكل ثابت، أما dynamic import() بيحمل Modules وقت التشغيل بشكل Lazy',
			'import العادي بيكون أسرع في كل الحالات، و dynamic import() دايمًا أبطأ',
			'import العادي بيسمح بالـ Named Exports بس، dynamic import() بيسمح بالـ Default Exports بس',
		],
		term: 'إيه الفرق بين import و dynamic import()؟',
	},
	{
		answer:
			'نوع Data Type جديد بيمثل أعداد صحيحة كبيرة جدًا أكبر من Number.MAX_SAFE_INTEGER',
		level: 'mid',
		options: [
			'Class جاهزة بتحسب العمليات الرياضية بسرعة عالية',
			'Method في Math API بتتعامل مع المعادلات المعقدة',
			'Property جوه JSON بتخلي أي رقم يتحول لـ String',
			'نوع Data Type جديد بيمثل أعداد صحيحة كبيرة جدًا أكبر من Number.MAX_SAFE_INTEGER',
		],
		term: 'إيه هو BigInt في JavaScript؟',
	},
	{
		answer:
			'WeakSet بيخزن Objects بس وبيتم مسحهم أوتوماتيك من Garbage Collector، إنما Set بيخزن أي نوع Data',
		level: 'mid',
		options: [
			'WeakSet بيشتغل جوه Functions بس، إنما Set بيشتغل في Global Scope',
			'WeakSet بيخزن Objects بس وبيتم مسحهم أوتوماتيك من Garbage Collector، إنما Set بيخزن أي نوع Data',
			'WeakSet بيخزن Data على شكل Array، إنما Set بيخزنها كـ Key-Value',
			'WeakSet أسرع دايمًا من Set في كل أنواع العمليات',
		],
		term: 'إيه الفرق بين WeakSet و Set؟',
	},
	{
		answer:
			'إن الـ Event يبدأ من العنصر الداخلي ويتنقل لفوق لعناصر الأب لحد يوصل للـ document',
		level: 'junior',
		options: [
			'إن الـ Event يتكرر تلقائيًا أكتر من مرة جوه نفس العنصر',
			'إن الـ Event يبدأ من العنصر الداخلي ويتنقل لفوق لعناصر الأب لحد يوصل للـ document',
			'إن JavaScript بتعمل Cache لكل Events اللي حصلت',
			'إن الـ Event بيتحول تلقائيًا لـ Custom Event من غير كود',
		],
		term: 'إيه هو Event Bubbling؟',
	},
	{
		answer:
			'Script بيشتغل في background من غير ما يفتح صفحة، وبيسمح بحاجات زي caching و offline support و push notifications',
		level: 'senior',
		options: [
			'Function جاهزة بتعمل Optimize للـ Images قبل ما تتعرض',
			'Script بيشتغل في background من غير ما يفتح صفحة، وبيسمح بحاجات زي caching و offline support و push notifications',
			'Module خاص بالـ Security بيمنع أي API Requests مش موثوقة',
			'Class جوه DOM API مسؤولة عن التعامل مع الـ Cookies',
		],
		term: 'إيه هو Service Worker في JavaScript؟',
	},
	{
		answer:
			'تقنية بتأجل تنفيذ Function لحد ما المستخدم يوقف إدخال أو حدث معين لفترة زمنية محددة',
		level: 'mid',
		options: [
			'طريقة لتكرار الكود بشكل أسرع عن طريق تجميع Events',
			'Process بيخلي المتصفح يقلل من استخدام الـ Memory أوتوماتيك',
			'Feature خاصة بالـ CSS Animations بس ومش علاقة بالـ JS',
			'تقنية بتأجل تنفيذ Function لحد ما المستخدم يوقف إدخال أو حدث معين لفترة زمنية محددة',
		],
		term: 'إيه هو Debouncing في JavaScript؟',
	},
	{
		answer:
			'تقنية بتخلي Function تتنفذ مرة واحدة بس في فترة زمنية معينة حتى لو اتندهت أكتر من مرة',
		level: 'mid',
		options: [
			'Function خاصة بالـ Node.js بتتحكم في سرعة الـ Streams',
			'تقنية بتخلي Function تتنفذ مرة واحدة بس في فترة زمنية معينة حتى لو اتندهت أكتر من مرة',
			'طريقة بتحول أي Array لـ Object فيه Indexes كمفاتيح',
			'Event في JavaScript بيمنع أي Button من الضغط أكتر من مرة',
		],
		term: 'إيه هو Throttling؟',
	},
	{
		answer:
			'العكس من Event Bubbling: الـ Event يبدأ من العنصر الأب وينزل لحد الابن',
		level: 'junior',
		options: [
			'طريقة لتكرار Events على عناصر متعددة',
			'العكس من Event Bubbling: الـ Event يبدأ من العنصر الأب وينزل لحد الابن',
			'آلية خاصة بالـ Async Events جوه Node.js',
			'Keyword جديدة بتتحكم في طريقة تسجيل الـ Event Listeners',
		],
		term: 'إيه هو Event Capturing؟',
	},
	{
		answer:
			'stack بيتخزن فيه القيم البسيطة (primitive values) بشكل مرتب، heap بيتخزن فيه Objects و Data الكبيرة',
		level: 'mid',
		options: [
			'stack للـ Global Variables، heap للـ Local Variables',
			'stack بيتخزن فيه القيم البسيطة (primitive values) بشكل مرتب، heap بيتخزن فيه Objects و Data الكبيرة',
			'stack بيستخدم في المتصفح بس، heap بيستخدم في الـ Node.js',
			'stack بيحتوي Functions بس، heap بيحتوي Arrays بس',
		],
		term: 'إيه الفرق بين stack و heap memory؟',
	},
	{
		answer:
			'تقنية بيستخدمها JavaScript Engine لتقليل استهلاك الـ Stack في Recursive Functions لو آخر سطر في Function بينادي على Function تانية',
		level: 'senior',
		options: [
			'طريقة بتخلي أي Function ترجع أكتر من قيمة في نفس الوقت',
			'Feature جديدة بتخزن Calls في Queue بدل Stack',
			'تقنية بيستخدمها JavaScript Engine لتقليل استهلاك الـ Stack في Recursive Functions لو آخر سطر في Function بينادي على Function تانية',
			'Function خاصة بالـ Arrays بتعيد ترتيب العناصر',
		],
		term: 'إيه هو Tail Call Optimization؟',
	},
	{
		answer: 'كود JavaScript بيضيف دعم لميزة جديدة في متصفحات قديمة مش بتفهمها',
		level: 'junior',
		options: [
			'مكتبة جاهزة للـ Testing بتدي Mock Data',
			'كود JavaScript بيضيف دعم لميزة جديدة في متصفحات قديمة مش بتفهمها',
			'Module بيحفظ Logs بتاعة Errors في ملف',
			'Function في ES6 بتحول أي String لرقم',
		],
		term: 'إيه هو Polyfill؟',
	},
	{
		answer:
			'Transpiler بيحول كود JavaScript جديد لإصدار أقدم، Compiler بيترجم الكود للغة منخفضة المستوى زي Machine Code',
		level: 'mid',
		options: [
			'Transpiler خاص بالـ CSS، Compiler خاص بالـ JS',
			'Transpiler أسرع في الأداء دايمًا من Compiler',
			'Compiler بيشتغل في المتصفح بس، Transpiler بيشتغل في الـ Node.js',
			'Transpiler بيحول كود JavaScript جديد لإصدار أقدم، Compiler بيترجم الكود للغة منخفضة المستوى زي Machine Code',
		],
		term: 'إيه الفرق بين Transpiler و Compiler؟',
	},
	{
		answer:
			'عملية في الـ Build Tools بتحذف الكود اللي مش مستخدم علشان تقلل حجم الملف النهائي',
		level: 'senior',
		options: [
			'طريقة لترتيب الـ DOM Elements في شكل شجرة',
			'آلية جديدة في ES6 للتعامل مع JSON',
			'عملية في الـ Build Tools بتحذف الكود اللي مش مستخدم علشان تقلل حجم الملف النهائي',
			'Event في المتصفح بيتسجل لما يحصل Scroll',
		],
		term: 'إيه هو Tree Shaking؟',
	},
	{
		answer:
			'Queue بيخزن الـ Promises callbacks اللي بتتنفذ قبل الـ Macrotask Queue زي setTimeout',
		level: 'senior',
		options: [
			'Array داخلية في JavaScript Engine بتسجل كل Variables الجديدة',
			'Queue بيخزن الـ Promises callbacks اللي بتتنفذ قبل الـ Macrotask Queue زي setTimeout',
			'Storage خاص بالـ Local Events جوه المتصفح',
			'طريقة لتخزين الـ Functions في Stack مختلف عن Call Stack',
		],
		term: 'إيه هو Microtask Queue؟',
	},
	{
		answer:
			'Stack بيخزن ترتيب الـ Functions اللي بتتنده ويتنفذ بالـ LIFO (last in, first out)',
		level: 'junior',
		options: [
			'Stack بيخزن ترتيب الـ Functions اللي بتتنده ويتنفذ بالـ LIFO (last in, first out)',
			'Storage داخلي في JavaScript بيخزن كل Events اللي لسه متسجلة',
			'Queue خاصة بالـ DOM Events بتتنفذ بالتوازي',
			'Class جوه JavaScript مسؤولة عن إدارة الـ Memory',
		],
		term: 'إيه هو Call Stack؟',
	},
	{
		answer:
			'تقنية بتخليك تسجل Event Listener على عنصر أب واحد عشان يتابع كل الأبناء بدل ما تحط Listeners كتير',
		level: 'mid',
		options: [
			'طريقة بتضاعف سرعة الـ Events عن طريق Cache',
			'Feature بتمنع Bubbling أو Capturing',
			'Keyword جديدة خاصة بـ ES2021 للتحكم في Events',
			'تقنية بتخليك تسجل Event Listener على عنصر أب واحد عشان يتابع كل الأبناء بدل ما تحط Listeners كتير',
		],
		term: 'إيه هو Event Delegation؟',
	},
	{
		answer:
			'defer بيخلي الـ Script يتأجل لحد ما الـ HTML يخلص Load وبعدين يتنفذ بالترتيب، async بيتنفذ أول ما يتحمل من غير انتظار',
		level: 'mid',
		options: [
			'defer بيشتغل بس في Chrome، async بيشتغل في باقي المتصفحات',
			'defer بيخلي الـ Script يتأجل لحد ما الـ HTML يخلص Load وبعدين يتنفذ بالترتيب، async بيتنفذ أول ما يتحمل من غير انتظار',
			'async بيخزن الـ Script في cache، defer بيمسحه بعد التنفيذ',
			'defer بيسمح بالـ Inline Scripts بس، async للـ External Scripts',
		],
		term: 'إيه الفرق بين Script defer و async؟',
	},
	{
		answer:
			'Design Pattern بيستخدم Proxy Objects علشان تضيف Layer وسطية للتحكم في الوصول لـ Object تاني',
		level: 'senior',
		options: [
			'طريقة لتكرار نفس الكود في أكتر من Class',
			'Module خاص بالـ Network Requests في JavaScript',
			'Design Pattern بيستخدم Proxy Objects علشان تضيف Layer وسطية للتحكم في الوصول لـ Object تاني',
			'Style للـ DOM Elements بيتخزن مؤقت في Memory',
		],
		term: 'إيه هو Proxy Pattern؟',
	},
	{
		answer:
			'Design Pattern بيخلي Object (Subject) يقدر يبلغ مجموعة Observers لما يحصل تغيير',
		level: 'senior',
		options: [
			'Design Pattern بيخلي Object (Subject) يقدر يبلغ مجموعة Observers لما يحصل تغيير',
			'Function في JavaScript بتعمل Watch لأي Variable',
			'Feature جديدة في ES7 بتتابع تغيرات DOM Elements',
			'Class في Node.js مسؤولة عن إدارة Streams',
		],
		term: 'إيه هو Observer Pattern؟',
	},
	{
		answer:
			'Mutable Data ممكن تتغير قيمتها بعد الإنشاء زي Arrays، Immutable Data مبتتغيرش زي Strings',
		level: 'junior',
		options: [
			'Mutable Data بتتخزن في heap، Immutable Data في stack',
			'Mutable Data ممكن تتغير قيمتها بعد الإنشاء زي Arrays، Immutable Data مبتتغيرش زي Strings',
			'Mutable Data بتحتاج Garbage Collector، Immutable Data مبتحتاجش',
			'Mutable Data بتشتغل في المتصفح بس، Immutable Data بتشتغل في الـ Server',
		],
		term: 'إيه الفرق بين Mutable و Immutable Data؟',
	},
	{
		answer:
			'نوع Reference جديد في ES2021 بيسمح تحتفظ بـ Reference لـ Object من غير ما تمنع Garbage Collector يمسحه',
		level: 'senior',
		options: [
			'نوع Reference جديد في ES2021 بيسمح تحتفظ بـ Reference لـ Object من غير ما تمنع Garbage Collector يمسحه',
			'Function خاصة بالـ Networking بتتعامل مع WebSockets',
			'Method جوه JSON بتحول أي Object لرقم',
			'Class جديدة للـ Data Structures في JavaScript',
		],
		term: 'إيه هو WeakRef؟',
	},
	{
		answer:
			'module.exports بتستخدم في CommonJS (Node.js القديم)، export default بتستخدم في ES Modules الحديثة',
		level: 'mid',
		options: [
			'module.exports خاصة بالـ Browser APIs، export default خاصة بالـ Server APIs',
			'module.exports بتسمح بتصدير Arrays بس، export default بتسمح بتصدير Objects',
			'export default بتشتغل من غير import، إنما module.exports محتاجة import',
			'module.exports بتستخدم في CommonJS (Node.js القديم)، export default بتستخدم في ES Modules الحديثة',
		],
		term: 'إيه الفرق بين module.exports و export default؟',
	},
	{
		answer:
			'لما Variable في Scope داخلي ياخد نفس اسم Variable في Scope خارجي فيغطي عليه',
		level: 'junior',
		options: [
			'Feature جديدة بتحمي الـ Variables من التعديل',
			'لما Variable في Scope داخلي ياخد نفس اسم Variable في Scope خارجي فيغطي عليه',
			'آلية بتخزن الـ Variables في IndexedDB',
			'Event خاص بالـ DOM Elements بيمنع Bubbling',
		],
		term: 'إيه هو Shadowing في JavaScript؟',
	},
	{
		answer: 'Primitive Data Type جديد من ES6 بيستخدم كمفاتيح فريدة للـ Objects',
		level: 'mid',
		options: [
			'Class جديدة بتعمل Encryption للـ Strings',
			'Method في Object API بتحول أي Value لـ Unique ID',
			'Primitive Data Type جديد من ES6 بيستخدم كمفاتيح فريدة للـ Objects',
			'Operator بيجمع بين أكتر من String',
		],
		term: 'إيه هو Symbol في JavaScript؟',
	},
	{
		answer:
			'قاعدة أمنية في المتصفحات بتمنع صفحة ويب من قراءة بيانات من دومين مختلف إلا بشروط معينة',
		level: 'senior',
		options: [
			'تقنية بتخلي JavaScript يشتغل على أكتر من Tab في نفس الوقت',
			'قاعدة أمنية في المتصفحات بتمنع صفحة ويب من قراءة بيانات من دومين مختلف إلا بشروط معينة',
			'Method في DOM API بترجع عنوان الموقع الحالي',
			'Feature جديدة في ES6 بتخلي الـ Modules تتشارك نفس الـ Scope',
		],
		term: 'إيه هو Same-Origin Policy؟',
	},
];
