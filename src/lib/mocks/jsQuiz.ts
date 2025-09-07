export type JsQuiz = {
	term: string;
	options: string[];
	answer: string;
};

export const jsQuiz: JsQuiz[] = [
	{
		answer: 'رفع التصريحات فوق قبل التنفيذ',
		options: [
			'تشغيل الكود في thread منفصل',
			'تجميع الكود في فايل واحد',
			'رفع التصريحات فوق قبل التنفيذ',
			'استخدام فانكشن بدون اسم',
		],
		term: 'يعني ايه Hoisting؟',
	},
	{
		answer: 'فانكشن شايلة معاها المتغيرات من البيئة الأصلية',
		options: [
			'فانكشن شايلة معاها المتغيرات من البيئة الأصلية',
			'نوع جديد من الـ loops',
			'إلغاء event bubbling',
			'كود بيتخزن في localStorage',
		],
		term: 'يعني ايه Closure؟',
	},
	{
		answer: 'تحويل نوع البيانات أوتوماتيك',
		options: [
			'عمل inheritance بين objects',
			'التعامل مع async code',
			'تحويل نوع البيانات أوتوماتيك',
			'منع تعديل object',
		],
		term: 'يعني ايه Type Coercion؟',
	},
	{
		answer: 'انتشار الحدث من العنصر الصغير للأكبر',
		options: [
			'تشغيل فانكشن مرة واحدة بس',
			'إلغاء تنفيذ الكود',
			'تخزين الداتا في cache',
			'انتشار الحدث من العنصر الصغير للأكبر',
		],
		term: 'يعني ايه Event Bubbling؟',
	},
	{
		answer: 'التقاط الحدث من الأب قبل الابن',
		options: [
			'تخزين الداتا في session',
			'التقاط الحدث من الأب قبل الابن',
			'تشغيل setTimeout',
			'استخدام فانكشن sync',
		],
		term: 'يعني ايه Event Capturing؟',
	},
	{
		answer: 'object للتعامل مع async code',
		options: [
			'object للتعامل مع async code',
			'وسيلة للتعامل مع DOM',
			'كائن بيحفظ state',
			'متغير بيتخزن في الذاكرة المؤقتة',
		],
		term: 'يعني ايه Promise؟',
	},
	{
		answer: 'Syntax للتعامل مع Promise بطريقة أسهل',
		options: [
			'نظام جديد للـ loops',
			'Syntax للتعامل مع Promise بطريقة أسهل',
			'دالة بتكرر array',
			'وظيفة من الـ Web API',
		],
		term: 'يعني ايه Async/Await؟',
	},
	{
		answer: 'المكان اللي بيتخزن فيه ترتيب استدعاء الفانكشن',
		options: [
			'وظيفة من JSON',
			'المكان اللي بيتخزن فيه ترتيب استدعاء الفانكشن',
			'Array فيها الداتا',
			'جزء من الـ API',
		],
		term: 'يعني ايه Call Stack؟',
	},
	{
		answer: 'فانكشن بتتبعت كـ parameter وتتندَه بعدين',
		options: [
			'Function جوة object',
			'Function بتشتغل بس في loops',
			'Function مالهاش اسم',
			'فانكشن بتتبعت كـ parameter وتتندَه بعدين',
		],
		term: 'يعني ايه Callback Function؟',
	},
	{
		answer: 'طريقة مختصرة لكتابة functions',
		options: [
			'Function جوة class',
			'Function بتعمل inheritance',
			'طريقة مختصرة لكتابة functions',
			'Function خاصة بالـ DOM',
		],
		term: 'يعني ايه Arrow Function؟',
	},
	{
		answer: 'فانكشن بتتنفذ أول ما تتكتب',
		options: [
			'Function ملهاش return',
			'فانكشن بتتنفذ أول ما تتكتب',
			'Function بتتعامل مع async',
			'Function بتكرر array',
		],
		term: 'يعني ايه IIFE؟',
	},
	{
		answer: 'آلية لعمل inheritance بين objects',
		options: [
			'وسيلة لحفظ الداتا',
			'جزء من الـ DOM',
			'آلية لعمل inheritance بين objects',
			'نوع من الـ events',
		],
		term: 'يعني ايه Prototype؟',
	},
	{
		answer: 'وضع بيشدد القواعد ويمنع أخطاء عشوائية',
		options: [
			'وضع بيشدد القواعد ويمنع أخطاء عشوائية',
			'وظيفة في console',
			'Function جديدة',
			'API خاصة بالـ JSON',
		],
		term: 'يعني ايه Strict Mode؟',
	},
	{
		answer: 'تأخير تنفيذ الفانكشن لحد ما يوقف الاستدعاء المتكرر',
		options: [
			'تشغيل فانكشن بسرعة كبيرة',
			'حفظ state في object',
			'تخزين الداتا في cache',
			'تأخير تنفيذ الفانكشن لحد ما يوقف الاستدعاء المتكرر',
		],
		term: 'يعني ايه Debouncing؟',
	},
	{
		answer: 'تشغيل الفانكشن كل فترة زمنية محددة',
		options: [
			'تشغيل فانكشن مرة واحدة',
			'منع فانكشن من التنفيذ',
			'تشغيل الفانكشن كل فترة زمنية محددة',
			'إلغاء timeout',
		],
		term: 'يعني ايه Throttling؟',
	},
	{
		answer: 'Function بتاخد Function أو بترجع Function',
		options: [
			'Function بتاخد Function أو بترجع Function',
			'Function جوة Array',
			'Function بتتعامل مع DOM',
			'Function بتخزن داتا',
		],
		term: 'يعني ايه Higher Order Function؟',
	},
	{
		answer: 'Function نفس المدخلات = نفس المخرجات وما بتأثرش على برة',
		options: [
			'Function بتعدل في DOM',
			'Function نفس المدخلات = نفس المخرجات وما بتأثرش على برة',
			'Function بتخزن داتا',
			'Function بتشتغل async',
		],
		term: 'يعني ايه Pure Function؟',
	},
	{
		answer: 'نسخة سطحية مرتبطة بالـ object الأصلي',
		options: [
			'نسخة مستقلة تماما',
			'نسخة سطحية مرتبطة بالـ object الأصلي',
			'تحويل object لـ string',
			'حذف key من object',
		],
		term: 'يعني ايه Shallow Copy؟',
	},
	{
		answer: 'نسخة مستقلة بالكامل عن الأصل',
		options: [
			'نسخة مرتبطة بالأصل',
			'تحويل object لـ JSON',
			'نسخة مستقلة بالكامل عن الأصل',
			'دمج objects مع بعض',
		],
		term: 'يعني ايه Deep Copy؟',
	},
	{
		answer: 'صيغة لتبادل البيانات باستخدام نصوص',
		options: [
			'صيغة لتبادل البيانات باستخدام نصوص',
			'قاعدة بيانات',
			'نوع من أنواع الـ loop',
			'مكتبة جافاسكريبت',
		],
		term: 'يعني ايه JSON؟',
	},
	{
		answer: 'مكان يخزن بيانات على المتصفح بشكل دائم',
		options: [
			'سيرفر خارجي',
			'ذاكرة مؤقتة للـ RAM',
			'API خاص بالـ CSS',
			'مكان يخزن بيانات على المتصفح بشكل دائم',
		],
		term: 'يعني ايه LocalStorage؟',
	},
	{
		answer: 'مكان يخزن بيانات على المتصفح طول ما التبويب مفتوح',
		options: [
			'ملفات على الهارد',
			'مكان يخزن بيانات على المتصفح طول ما التبويب مفتوح',
			'قاعدة بيانات NoSQL',
			'API للـ DOM events',
		],
		term: 'يعني ايه SessionStorage؟',
	},
	{
		answer: 'قاعدة بيانات جوة المتصفح لتخزين كميات كبيرة من الداتا',
		options: [
			'نوع من أنواع الـ cookies',
			'API خاص بالـ JSON',
			'قاعدة بيانات جوة المتصفح لتخزين كميات كبيرة من الداتا',
			'طريقة لتخزين الـ CSS',
		],
		term: 'يعني ايه IndexedDB؟',
	},
	{
		answer: 'وسيلة لطلب بيانات من السيرفر',
		options: [
			'وسيلة لطلب بيانات من السيرفر',
			'API للـ DOM events',
			'وظيفة من الـ JSON',
			'طريقة لحفظ state',
		],
		term: 'يعني ايه Fetch API؟',
	},
	{
		answer: 'تشغيل فانكشن بعد مدة زمنية معينة',
		options: [
			'تشغيل فانكشن بعد مدة زمنية معينة',
			'تشغيل فانكشن كل فترة زمنية',
			'إلغاء فانكشن',
			'وظيفة لتخزين بيانات',
		],
		term: 'يعني ايه setTimeout؟',
	},
	{
		answer: 'تشغيل فانكشن كل فترة زمنية متكررة',
		options: [
			'تشغيل فانكشن مرة واحدة',
			'تشغيل فانكشن كل فترة زمنية متكررة',
			'إلغاء كود من التنفيذ',
			'حذف عنصر من DOM',
		],
		term: 'يعني ايه setInterval؟',
	},
	{
		answer: 'إلغاء مؤقت معمول بـ setTimeout',
		options: [
			'مسح الكونسول',
			'حذف داتا من LocalStorage',
			'إيقاف promise',
			'إلغاء مؤقت معمول بـ setTimeout',
		],
		term: 'يعني ايه clearTimeout؟',
	},
	{
		answer: 'إلغاء مؤقت معمول بـ setInterval',
		options: [
			'إلغاء promise',
			'مسح الـ cookies',
			'إلغاء مؤقت معمول بـ setInterval',
			'إيقاف حدث DOM',
		],
		term: 'يعني ايه clearInterval؟',
	},
	{
		answer: 'بتشير للكونتكست الحالي اللي الفانكشن بتتندَه فيه',
		options: [
			'بتشير للكونتكست الحالي اللي الفانكشن بتتندَه فيه',
			'متغير global',
			'API من المتصفح',
			'كلمة محجوزة للـ JSON',
		],
		term: 'يعني ايه this keyword؟',
	},
	{
		answer: 'تفكيك الـ arrays أو objects لمتغيرات',
		options: [
			'دمج objects مع بعض',
			'تفكيك الـ arrays أو objects لمتغيرات',
			'حذف عناصر من array',
			'تحويل object لـ string',
		],
		term: 'يعني ايه Destructuring؟',
	},
	{
		answer: 'توسيع array أو object جوة مكان جديد',
		options: [
			'توسيع array أو object جوة مكان جديد',
			'دمج نصوص',
			'إلغاء عنصر',
			'تشغيل loop',
		],
		term: 'يعني ايه Spread Operator؟',
	},
	{
		answer: 'جمع باقي العناصر في array أو object',
		options: [
			'تشغيل promise',
			'حذف عناصر من array',
			'دمج نصوص',
			'جمع باقي العناصر في array أو object',
		],
		term: 'يعني ايه Rest Operator؟',
	},
	{
		answer: 'طريقة لكتابة string بدوال وتنسيق أسهل',
		options: [
			'طريقة لتخزين object',
			'نوع من أنواع الـ loops',
			'API خاص بالـ JSON',
			'طريقة لكتابة string بدوال وتنسيق أسهل',
		],
		term: 'يعني ايه Template Literals؟',
	},
	{
		answer:
			'طريقة للوصول للـ object properties من غير ما يعمل error لو undefined',
		options: [
			'تخزين داتا في cookies',
			'طريقة للوصول للـ object properties من غير ما يعمل error لو undefined',
			'API خاص بالـ fetch',
			'Loop جديد في ES6',
		],
		term: 'يعني ايه Optional Chaining؟',
	},
	{
		answer: 'تحديد قيمة افتراضية لو المتغير null أو undefined',
		options: [
			'إلغاء promise',
			'تحديد قيمة افتراضية لو المتغير null أو undefined',
			'تحويل string لرقم',
			'تشغيل async function',
		],
		term: 'يعني ايه Nullish Coalescing؟',
	},
	{
		answer: 'نوع بيانات primitive بيدي قيمة فريدة',
		options: [
			'نوع بيانات primitive بيدي قيمة فريدة',
			'مكتبة جافاسكريبت',
			'API خاص بالـ DOM',
			'طريقة لتخزين داتا',
		],
		term: 'يعني ايه Symbol؟',
	},
	{
		answer: 'Structure بيخزن key-value pairs بأي نوع',
		options: [
			'Structure بيخزن key-value pairs بأي نوع',
			'Array فيها أرقام بس',
			'API خاص بالـ JSON',
			'مكتبة للـ CSS',
		],
		term: 'يعني ايه Map object؟',
	},
	{
		answer: 'Structure بيخزن قيم فريدة من غير تكرار',
		options: [
			'Array فيها داتا متكررة',
			'API خاص بالـ Cookies',
			'Structure بيخزن قيم فريدة من غير تكرار',
			'Function جوة object',
		],
		term: 'يعني ايه Set object؟',
	},
	{
		answer: 'Map keys بتاعته لازم تبقى objects وبتتحذف لو مفيش reference',
		options: [
			'Map عادي',
			'Map keys بتاعته لازم تبقى objects وبتتحذف لو مفيش reference',
			'API خاص بالـ JSON',
			'Loop جديد',
		],
		term: 'يعني ايه WeakMap؟',
	},
	{
		answer: 'Set keys بتاعته لازم تبقى objects وبتتحذف لو مفيش reference',
		options: [
			'Set keys بتاعته لازم تبقى objects وبتتحذف لو مفيش reference',
			'Set عادي',
			'Array methods',
			'وظيفة من الـ DOM',
		],
		term: 'يعني ايه WeakSet؟',
	},
	{
		answer: 'طريقة بتخلي كود يبان كأنه في كلاس وهو أساسًا فانكشن',
		options: [
			'طريقة لتخزين البيانات في localStorage',
			'أداة لتكرار الكود بشكل أسرع',
			'منع التداخل بين الفانكشنز',
			'طريقة بتخلي كود يبان كأنه في كلاس وهو أساسًا فانكشن',
		],
		term: 'يعنى ايه Prototype?',
	},
	{
		answer: 'آلية بتحافظ على الذاكرة عن طريق تنظيف الحاجات اللي مش مستخدمة',
		options: [
			'تخزين نسخة من الكود في الكاش',
			'آلية بتحافظ على الذاكرة عن طريق تنظيف الحاجات اللي مش مستخدمة',
			'تكرار الكود بشكل أسرع',
			'دمج أكتر من object في واحد',
		],
		term: 'يعنى ايه Garbage Collection?',
	},
	{
		answer: 'كائن بيجمع خصائص ودوال مع بعض',
		options: [
			'ملف بيتخزن في السيرفر',
			'قيمة Boolean',
			'وسيلة للتكرار في Array',
			'كائن بيجمع خصائص ودوال مع بعض',
		],
		term: 'يعنى ايه Object?',
	},
	{
		answer: 'وسيلة بتنظم الكود باستخدام import و export',
		options: [
			'دالة بتشغل نفسها تلقائيًا',
			'Loop بيتوقف عند شرط معين',
			'وسيلة بتنظم الكود باستخدام import و export',
			'متغيرات محجوزة في الذاكرة',
		],
		term: 'يعنى ايه Modules?',
	},
	{
		answer: 'دالة بتتنادى على نفسها جواها',
		options: [
			'دالة بتتنادى على نفسها جواها',
			'كود بيكرر نفسه في loop',
			'دالة ملهاش اسم',
			'Object جوه Object',
		],
		term: 'يعنى ايه Recursion?',
	},
	{
		answer: 'وسيلة تمنع تغيير بيانات object بعد إنشاؤه',
		options: [
			'Loop جديد',
			'وسيلة تمنع تغيير بيانات object بعد إنشاؤه',
			'Event خاص بالـ DOM',
			'دالة بترجع Promise',
		],
		term: 'يعنى ايه Immutable Object?',
	},
	{
		answer: 'Event بيتنقل من العنصر الصغير للكبير',
		options: [
			'Event بيتنقل من الكبير للصغير',
			'Event بيتوقف عند أول عنصر',
			'Event بيتنقل من العنصر الصغير للكبير',
			'Event بيرجع Boolean',
		],
		term: 'يعنى ايه Event Bubbling?',
	},
	{
		answer: 'Event بيتنقل من الكبير للصغير لحد ما يوصل للعنصر الهدف',
		options: [
			'Event بيقف عند العنصر الهدف',
			'Event بيتنقل من الكبير للصغير لحد ما يوصل للعنصر الهدف',
			'Event بيرجع قيمة',
			'Event بيرجع Promise',
		],
		term: 'يعنى ايه Event Capturing?',
	},
	{
		answer: 'طريقة تخليك تشغل كود كل فترة زمنية',
		options: [
			'تخزين بيانات في object',
			'Loop بينفذ مرة واحدة',
			'طريقة تخليك تشغل كود كل فترة زمنية',
			'وسيلة لمنع errors',
		],
		term: 'يعنى ايه setInterval?',
	},
	{
		answer: 'طريقة تخليك تأجل تنفيذ كود لحد وقت معين',
		options: [
			'تكرار Array',
			'دالة بترجع Boolean',
			'Loop بيوقف نفسه',
			'طريقة تخليك تأجل تنفيذ كود لحد وقت معين',
		],
		term: 'يعنى ايه setTimeout?',
	},
	{
		answer: 'بترجع نسخة shallow من جزء من array',
		options: [
			'بترجع نسخة shallow من جزء من array',
			'بتمسح عناصر array',
			'بتضيف عناصر في النص',
			'بتحول array لـ string',
		],
		term: 'يعنى ايه Array.slice?',
	},
	{
		answer: 'بتغير array نفسه وتشيل أو تضيف عناصر',
		options: [
			'بترجع نسخة shallow من array',
			'بتحول array لـ string',
			'بتغير array نفسه وتشيل أو تضيف عناصر',
			'بتعمل sort للعناصر',
		],
		term: 'يعنى ايه Array.splice?',
	},
];
