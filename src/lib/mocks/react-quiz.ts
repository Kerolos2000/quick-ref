import { Quiz } from 'src/types';

export const reactQuiz: Quiz[] = [
	{
		answer:
			'نسخة خفيفة من الـ DOM الحقيقي React بتقارنها عشان تحدث بس اللي اتغير',
		level: 'junior',
		options: [
			'قاعدة بيانات بتخزن بيانات الـ UI مؤقتًا',
			'نسخة خفيفة من الـ DOM الحقيقي React بتقارنها عشان تحدث بس اللي اتغير',
			'أداة Debugging خاصة بمطوري React',
			'ملف CSS بيتولد أوتوماتيك عشان ينظم الـ Styles',
		],
		term: 'يعني إيه Virtual DOM في React؟',
	},
	{
		answer:
			'SSR بيرندر الصفحة في السيرفر قبل ما توصل للمتصفح، CSR بيخلي المتصفح هو اللي يبني الصفحة',
		level: 'mid',
		options: [
			'SSR أسرع دايمًا من CSR مهما كان السيناريو',
			'CSR بيسمح بس بعرض Static Data و SSR للـ Dynamic Data',
			'SSR بيرندر الصفحة في السيرفر قبل ما توصل للمتصفح، CSR بيخلي المتصفح هو اللي يبني الصفحة',
			'SSR بيشتغل بس مع APIs و CSR مع Components',
		],
		term: 'إيه الفرق بين SSR و CSR في Next.js؟',
	},
	{
		answer:
			'Functions بتديك Features زي state و lifecycle من غير ما تكتب Class',
		level: 'junior',
		options: [
			'Functions بتديك Features زي state و lifecycle من غير ما تكتب Class',
			'Components جاهزة من مكتبة React UI',
			'Operators جديدة في ES6 مخصوصة لReact',
			'ملفات Config بتتحكم في طريقة بناء المشروع',
		],
		term: 'إيه هو React Hook؟',
	},
	{
		answer:
			'useEffect بتتنفذ بعد ما React يرسم الـ UI، useLayoutEffect بتتنفذ قبل ما التغييرات تتعرض على الشاشة',
		level: 'senior',
		options: [
			'useEffect بتتنفذ بعد ما React يرسم الـ UI، useLayoutEffect بتتنفذ قبل ما التغييرات تتعرض على الشاشة',
			'useLayoutEffect مجرد Alias لنفس وظيفة useEffect',
			'useEffect بتشتغل بس في SSR و useLayoutEffect في CSR',
			'useLayoutEffect أبطأ من useEffect في كل الحالات',
		],
		term: 'إيه الفرق بين useEffect و useLayoutEffect؟',
	},
	{
		answer:
			'عملية دمج الـ HTML الجاهز من السيرفر مع React عشان يبقى Interactive',
		level: 'mid',
		options: [
			'طريقة لضغط الصور في مشروع Next.js',
			'Feature في React بتخزن Components في Cache',
			'وظيفة بتعمل Optimize للـ Database Queries',
			'عملية دمج الـ HTML الجاهز من السيرفر مع React عشان يبقى Interactive',
		],
		term: 'إيه هو Hydration في Next.js؟',
	},
	{
		answer: 'بتجهز البيانات وقت الـ build عشان الصفحة تتبني Static',
		level: 'mid',
		options: [
			'بتجيب البيانات جوه المتصفح بعد ما الصفحة تتحمل',
			'بتجهز البيانات وقت الـ build عشان الصفحة تتبني Static',
			'Function في React Router للـ Navigation',
			'Method بتخزن الـ Props في LocalStorage',
		],
		term: 'إيه فايدة getStaticProps في Next.js؟',
	},
	{
		answer:
			'getServerSideProps بيتنفذ مع كل Request، getStaticProps بيتنفذ وقت الـ build',
		level: 'mid',
		options: [
			'getStaticProps بيشتغل بس في الـ Client، getServerSideProps بيشتغل في الـ Server',
			'الاتنين بيعملوا نفس الحاجة لكن بأسماء مختلفة',
			'getServerSideProps بيتنفذ مع كل Request، getStaticProps بيتنفذ وقت الـ build',
			'getStaticProps بيرجع Data من LocalStorage بس',
		],
		term: 'إيه الفرق بين getServerSideProps و getStaticProps؟',
	},
	{
		answer:
			'useState بسيط لإدارة State صغيرة، useReducer مفيد للحالات المعقدة اللي فيها Logic أو State متشعبة',
		level: 'mid',
		options: [
			'useReducer أسرع دايمًا من useState',
			'useState بيشتغل بس مع Numbers، useReducer بيشتغل مع Objects',
			'useReducer مجرد اسم تاني لنفس وظيفة useState',
			'useState بسيط لإدارة State صغيرة، useReducer مفيد للحالات المعقدة اللي فيها Logic أو State متشعبة',
		],
		term: 'إيه الفرق بين useState و useReducer؟',
	},
	{
		answer:
			'Endpoints جوه المشروع بتكتبها بـ JavaScript/TypeScript عشان تبني Backend صغير',
		level: 'junior',
		options: [
			'ملفات Config بتتحكم في الـ Routing بتاع الصفحات',
			'Endpoints جوه المشروع بتكتبها بـ JavaScript/TypeScript عشان تبني Backend صغير',
			'مكتبة خارجية مسؤولة عن التعامل مع APIs',
			'كود بيخلي الصفحة تتحدث أوتوماتيك كل دقيقة',
		],
		term: 'إيه هو Next.js API Routes؟',
	},
	{
		answer:
			'طريقة قديمة لجلب البيانات على الـ Server أو الـ Client قبل ما الصفحة تتحمل',
		level: 'senior',
		options: [
			'طريقة قديمة لجلب البيانات على الـ Server أو الـ Client قبل ما الصفحة تتحمل',
			'Method جديدة بتخزن البيانات في LocalStorage',
			'Function بتعمل Validate على Props قبل ما تتعرض',
			'Config File خاصة بالـ Routing',
		],
		term: 'إيه فايدة getInitialProps في Next.js؟',
	},
	{
		answer: 'Feature بتخلي React يستنى Data أو Component معين قبل ما يرسمه',
		level: 'mid',
		options: [
			'Method في React Router للتنقل بين الصفحات',
			'Class مسؤولة عن Error Handling',
			'Feature بتخلي React يستنى Data أو Component معين قبل ما يرسمه',
			'Config File لتحديد الـ Build Options',
		],
		term: 'إيه هو Suspense في React؟',
	},
	{
		answer:
			'Next.js Image Component بيعمل Lazy Loading و Resizing و WebP Conversion أوتوماتيك',
		level: 'mid',
		options: [
			'الفرق الوحيد إن Next.js Image بيشتغل بس مع PNG',
			'Next.js Image Component بيعمل Lazy Loading و Resizing و WebP Conversion أوتوماتيك',
			'الصور العادية أسرع دايمًا من Image Optimization',
			'Image Optimization بيغير اسم الملف عشان يبقى SEO Friendly',
		],
		term: 'إيه الفرق بين Image Optimization في Next.js وصور عادية؟',
	},
	{
		answer:
			'SSG بيبني الصفحات كلها وقت الـ build، ISR بيسمح تحدث صفحات معينة بعد النشر من غير ما تعمل build جديد',
		level: 'senior',
		options: [
			'SSG بيبني الصفحات كلها وقت الـ build، ISR بيسمح تحدث صفحات معينة بعد النشر من غير ما تعمل build جديد',
			'الاتنين بيعملوا نفس الحاجة لكن بأسماء مختلفة',
			'ISR بيشتغل بس مع Images، SSG بيشتغل مع Components',
			'SSG أبطأ دايمًا من ISR',
		],
		term: 'إيه الفرق بين Static Site Generation و Incremental Static Regeneration؟',
	},
	{
		answer:
			'طريقة لمشاركة بيانات بين Components من غير ما تمرر Props على كل المستويات',
		level: 'junior',
		options: [
			'Database صغيرة مدمجة مع React',
			'Config File لتخزين القيم العامة',
			'طريقة لمشاركة بيانات بين Components من غير ما تمرر Props على كل المستويات',
			'Class في React مسؤولة عن Events',
		],
		term: 'إيه هو Context API في React؟',
	},
	{
		answer:
			'Link بيعمل Navigation من غير Refresh كامل للصفحة، إنما a tag بيعمل Reload',
		level: 'junior',
		options: [
			'Link بيتعامل بس مع APIs، a tag بيتعامل مع الملفات',
			'Link بيعمل Navigation من غير Refresh كامل للصفحة، إنما a tag بيعمل Reload',
			'Link أسرع دايمًا حتى لو بيعمل Reload',
			'a tag بيشتغل بس في CSR، Link في SSR',
		],
		term: 'إيه الفرق بين Link و a tag في Next.js؟',
	},
	{
		answer: 'تسمح تضيف Tags زي title, meta, link للصفحة',
		level: 'junior',
		options: [
			'مسؤولة عن Error Handling',
			'تعمل Inject لملفات CSS أوتوماتيك',
			'تتحكم في Security Headers للـ API Routes',
			'تسمح تضيف Tags زي title, meta, link للصفحة',
		],
		term: 'إيه فايدة Head Component في Next.js؟',
	},
	{
		answer:
			'Client Components بتترندر في المتصفح، Server Components بتترندر في السيرفر وتتبعت جاهزة',
		level: 'senior',
		options: [
			'Client Components أسرع دايمًا من Server Components',
			'Server Components بتشتغل بس مع APIs، Client Components للـ UI',
			'Client Components بتترندر في المتصفح، Server Components بتترندر في السيرفر وتتبعت جاهزة',
			'مفيش فرق حقيقي، دي مجرد أسماء مختلفة',
		],
		term: 'إيه الفرق بين Client Components و Server Components في Next.js 13؟',
	},
	{
		answer:
			'Hook بيعمل Memoization عشان ميحسبش قيمة معينة غير لما الـ Dependencies تتغير',
		level: 'mid',
		options: [
			'Hook بيشغل Side Effects زي useEffect',
			'Hook بيعمل Memoization عشان ميحسبش قيمة معينة غير لما الـ Dependencies تتغير',
			'Method لتخزين بيانات في LocalStorage',
			'Config File بيخزن Global Variables',
		],
		term: 'إيه هو useMemo في React؟',
	},
	{
		answer:
			'بتتنفذ قبل ما يوصل Request للـ Route عشان تعمل Authentication أو Redirect أو Logging',
		level: 'senior',
		options: [
			'بتتنفذ قبل ما يوصل Request للـ Route عشان تعمل Authentication أو Redirect أو Logging',
			'Class جاهزة بتتعامل مع الـ Cookies أوتوماتيك',
			'Function جوه getStaticProps بتحدد صلاحيات الصفحة',
			'Component خاص بالـ Navigation',
		],
		term: 'إيه فايدة Middleware في Next.js؟',
	},
	{
		answer:
			'Syntax بيخليك تكتب HTML جوه JavaScript والـ React بيحوّله لـ JavaScript calls',
		level: 'junior',
		options: [
			'لغة جديدة بديلة عن JavaScript',
			'Syntax بيخليك تكتب HTML جوه JavaScript والـ React بيحوّله لـ JavaScript calls',
			'ملف Config مسؤول عن الـ Routing',
			'Method في React بتحوّل أي String لـ Component',
		],
		term: 'إيه هو JSX؟',
	},
	{
		answer:
			'Controlled بيكون الـ state بتاعه جوه React، Uncontrolled بيستخدم DOM مباشرة',
		level: 'mid',
		options: [
			'Controlled بيتعامل مع APIs بس، Uncontrolled للـ UI',
			'Uncontrolled أسرع من Controlled في كل الحالات',
			'Controlled بيتخزن في LocalStorage بشكل أوتوماتيك',
			'Controlled بيكون الـ state بتاعه جوه React، Uncontrolled بيستخدم DOM مباشرة',
		],
		term: 'إيه الفرق بين Controlled و Uncontrolled Components؟',
	},
	{
		answer: 'بيخزن Reference لعناصر DOM أو لأي قيمة من غير ما يسبب Re-render',
		level: 'junior',
		options: [
			'Hook بيشغل API Calls أوتوماتيك',
			'Hook بيعمل نفس شغل useState بالظبط',
			'بيخزن Reference لعناصر DOM أو لأي قيمة من غير ما يسبب Re-render',
			'Class مسؤولة عن Styles',
		],
		term: 'إيه فايدة useRef في React؟',
	},
	{
		answer:
			'Static Routing يعني صفحات بأسماء ثابتة، Dynamic Routing بيسمح تستخدم Parameters زي [id].js',
		level: 'junior',
		options: [
			'Static Routing يعني صفحات بأسماء ثابتة، Dynamic Routing بيسمح تستخدم Parameters زي [id].js',
			'Static Routing أسرع 10 مرات من Dynamic Routing',
			'Dynamic Routing بيشتغل بس مع SSR، Static مع CSR',
			'Static Routing مخصص للـ API Routes بس',
		],
		term: 'إيه الفرق بين Static Routing و Dynamic Routing في Next.js؟',
	},
	{
		answer:
			'Hook بيعمل Memoization للـ Functions عشان متتولدش من جديد في كل Render',
		level: 'mid',
		options: [
			'Hook بيشغل أي Callback Function بعد 5 ثواني',
			'Hook بيعمل Memoization للـ Functions عشان متتولدش من جديد في كل Render',
			'Method في React Router للتنقل بين الصفحات',
			'Function خاصة بتحويل Promises لـ async/await',
		],
		term: 'إيه هو useCallback في React؟',
	},
	{
		answer:
			'Component Class بتلتقط Errors جوه الشجرة الفرعية وتعرض Fallback UI',
		level: 'senior',
		options: [
			'Function مسؤولة عن Validate الـ Props',
			'Middleware في Next.js',
			'Component Class بتلتقط Errors جوه الشجرة الفرعية وتعرض Fallback UI',
			'Method في useEffect بتمنع الكراش',
		],
		term: 'إيه هو Error Boundary في React؟',
	},
	{
		answer:
			'getStaticPaths بتحدد الـ dynamic routes اللي هتتبني وقت الـ build، getStaticProps بيجيب البيانات للصفحة',
		level: 'mid',
		options: [
			'getStaticPaths بتحدد الـ dynamic routes اللي هتتبني وقت الـ build، getStaticProps بيجيب البيانات للصفحة',
			'getStaticProps أسرع من getStaticPaths في كل الحالات',
			'getStaticPaths بتشتغل بس في Client، getStaticProps في Server',
			'getStaticProps مسؤولة عن Cookies و getStaticPaths مسؤولة عن SEO',
		],
		term: 'إيه الفرق بين getStaticPaths و getStaticProps؟',
	},
	{
		answer:
			'العملية اللي React بيقارن فيها Virtual DOM بالـ DOM عشان يقرر إيه يتحدث',
		level: 'senior',
		options: [
			'Method لتحويل Class Component لـ Function Component',
			'Process خاص بالـ Server Side Rendering',
			'Config File بيتحكم في الـ Build Pipeline',
			'العملية اللي React بيقارن فيها Virtual DOM بالـ DOM عشان يقرر إيه يتحدث',
		],
		term: 'إيه هو React Reconciliation؟',
	},
	{
		answer:
			'useImperativeHandle بيتحكم في القيم اللي بتتصدّر من Ref لما تستخدم مع forwardRef، useRef بيخزن قيمة عادية',
		level: 'senior',
		options: [
			'useRef أسرع في كل الحالات',
			'useImperativeHandle بيتحكم في القيم اللي بتتصدّر من Ref لما تستخدم مع forwardRef، useRef بيخزن قيمة عادية',
			'useImperativeHandle بيستخدم بس مع Class Components',
			'useImperativeHandle مجرد Alias لنفس وظيفة useRef',
		],
		term: 'إيه الفرق بين useImperativeHandle و useRef؟',
	},
	{
		answer: 'اختبار Component من غير ما يرندر Components الأبناء',
		level: 'mid',
		options: [
			'اختبار بيحاكي الـ Browser كامل',
			'Feature في Next.js مسؤولة عن Navigation',
			'اختبار Component من غير ما يرندر Components الأبناء',
			'Method في useEffect بتمنع Side Effects',
		],
		term: 'إيه هو Shallow Rendering في React Testing؟',
	},
	{
		answer:
			'Hook بيولد Unique IDs ثابتة بين الـ Server والـ Client لتفادي مشاكل الـ Hydration',
		level: 'mid',
		options: [
			'Hook بيخزن IDs في LocalStorage',
			'Method في Next.js Routing',
			'Function بتحوّل أي String لـ Random ID',
			'Hook بيولد Unique IDs ثابتة بين الـ Server والـ Client لتفادي مشاكل الـ Hydration',
		],
		term: 'إيه هو useId في React؟',
	},
	{
		answer:
			'PureComponent بيعمل shallow comparison للـ props والـ state عشان يقلل الـ re-renders',
		level: 'senior',
		options: [
			'PureComponent بيعمل shallow comparison للـ props والـ state عشان يقلل الـ re-renders',
			'PureComponent بيشتغل بس مع Hooks',
			'Component العادية أسرع في كل الحالات',
			'PureComponent بيشتغل بس مع SSR',
		],
		term: 'إيه الفرق بين PureComponent و Component العادية؟',
	},
	{
		answer: 'HOC بيمنع إعادة Render للـ Component لو الـ props ما اتغيرتش',
		level: 'mid',
		options: [
			'Method بتخزن Components في LocalStorage',
			'HOC بيمنع إعادة Render للـ Component لو الـ props ما اتغيرتش',
			'Function بتسجل Errors في Console',
			'Hook بيعمل نفس شغل useEffect',
		],
		term: 'إيه هو React.memo؟',
	},
	{
		answer:
			'getServerSideProps بيجيب بيانات وقت الـ Request، Middleware بتتنفذ قبل ما الصفحة توصل للمستخدم وتقدر تعمل Redirect أو Auth',
		level: 'senior',
		options: [
			'الاتنين بيعملوا نفس الحاجة بالظبط',
			'Middleware أبطأ من getServerSideProps في كل الحالات',
			'getServerSideProps بيجيب بيانات وقت الـ Request، Middleware بتتنفذ قبل ما الصفحة توصل للمستخدم وتقدر تعمل Redirect أو Auth',
			'getServerSideProps بيشتغل بس في API Routes، Middleware بس للـ UI',
		],
		term: 'إيه الفرق بين getServerSideProps و Middleware؟',
	},
	{
		answer: 'Hook بيسمح تعمل Updates غير عاجلة من غير ما تبطأ الـ UI الأساسي',
		level: 'senior',
		options: [
			'Hook بيشغل Animation أوتوماتيك',
			'Function في Next.js API Routes',
			'Hook بيسمح تعمل Updates غير عاجلة من غير ما تبطأ الـ UI الأساسي',
			'Config File للـ Navigation',
		],
		term: 'إيه هو useTransition في React؟',
	},
	{
		answer:
			'Layouts بتحدد الشكل العام المشترك بين الصفحات، Pages بتحدد المحتوى الخاص بكل صفحة',
		level: 'junior',
		options: [
			'Pages أسرع من Layouts في كل الحالات',
			'Layouts بتتعامل مع API Calls بس',
			'Pages بتخزن Data في LocalStorage، Layouts لأ',
			'Layouts بتحدد الشكل العام المشترك بين الصفحات، Pages بتحدد المحتوى الخاص بكل صفحة',
		],
		term: 'إيه الفرق بين Layouts و Pages في Next.js؟',
	},
	{
		answer:
			'نظام Routing جديد بيستخدم مجلد app/ ويدعم Server Components بشكل أساسي',
		level: 'senior',
		options: [
			'نظام Routing جديد بيستخدم مجلد app/ ويدعم Server Components بشكل أساسي',
			'Feature خاصة بالـ Security Headers',
			'Config File بيتحكم في الـ API Routes',
			'Class في React مسؤولة عن Navigation',
		],
		term: 'إيه هو App Router الجديد في Next.js 13؟',
	},
	{
		answer:
			'useContext كويس للـ state البسيطة، Redux لإدارة state كبيرة ومعقدة',
		level: 'mid',
		options: [
			'Redux أسرع دايمًا من useContext',
			'useContext كويس للـ state البسيطة، Redux لإدارة state كبيرة ومعقدة',
			'useContext بيخزن Data في LocalStorage، Redux بيخزنها في API',
			'الاتنين بيعملوا نفس الحاجة 100%',
		],
		term: 'إيه الفرق بين useContext و Redux؟',
	},
	{
		answer:
			'فكرة إنك تفصل الـ Logic عن الـ UI Components بحيث تبني Design مخصص بسهولة',
		level: 'senior',
		options: [
			'مكتبة CSS خاصة بـ Next.js',
			'فكرة إنك تفصل الـ Logic عن الـ UI Components بحيث تبني Design مخصص بسهولة',
			'طريقة لتحويل Class Components لـ Function Components',
			'Method خاصة بالـ DOM Events',
		],
		term: 'إيه هو Headless UI Concept؟',
	},
	{
		answer: 'نسخة وهمية من DOM الحقيقي بتخلي التحديثات أسرع',
		level: 'junior',
		options: [
			'API في Node.js عشان تتعامل مع الملفات',
			'Hook خاص بالـ State Management',
			'نسخة وهمية من DOM الحقيقي بتخلي التحديثات أسرع',
			'طريقة لتشغيل JavaScript من غير متصفح',
		],
		term: 'يعني إيه Virtual DOM في React؟',
	},
	{
		answer: 'بيسمحلك تدير state معقدة باستخدام reducer functions',
		level: 'mid',
		options: [
			'بيتستخدم عشان تعمل memoization للـ Components',
			'خاص بالتعامل مع side effects في React',
			'مسؤول عن التعامل مع context من غير Provider',
			'بيسمحلك تدير state معقدة باستخدام reducer functions',
		],
		term: 'إيه فايدة useReducer Hook؟',
	},
	{
		answer: 'الأول بيتنفذ وقت build، والتاني بيتنفذ عند كل request',
		level: 'mid',
		options: [
			'الأول بيتنفذ وقت build، والتاني بيتنفذ عند كل request',
			'الاتنين بيتنفذوا في client side',
			'الاتنين بيتنفذوا وقت build بس بيختلفوا في السرعة',
			'getServerSideProps بيشتغل بس مع API Routes',
		],
		term: 'إيه الفرق بين getStaticProps و getServerSideProps في Next.js؟',
	},
	{
		answer:
			'عملية ربط الـ HTML الجاهز اللي جه من السيرفر مع React components على الـ client',
		level: 'senior',
		options: [
			'طريقة لتخزين البيانات في localStorage',
			'عملية ربط الـ HTML الجاهز اللي جه من السيرفر مع React components على الـ client',
			'API في React Router للتنقل بين الصفحات',
			'أداة في Next.js لتحويل الصور',
		],
		term: 'يعني إيه Hydration في React/Next.js؟',
	},
	{
		answer:
			'Client Component بيشتغل على المتصفح و Server Component بيتنفذ على السيرفر',
		level: 'senior',
		options: [
			'الاتنين بيشتغلوا على المتصفح بس بيتفرقوا في الـ performance',
			'Server Component هو نفسه API Route',
			'Client Component معناه إن الكود هيتبني وقت build',
			'Client Component بيشتغل على المتصفح و Server Component بيتنفذ على السيرفر',
		],
		term: 'إيه الفرق بين Client Component و Server Component في Next.js 13؟',
	},
	{
		answer: 'بيمنع إعادة الريندر للـ Component إلا لو props اتغيرت',
		level: 'mid',
		options: [
			'بيخزن البيانات في الـ Context',
			'Hook خاص بالـ performance optimization في Next.js',
			'بيمنع إعادة الريندر للـ Component إلا لو props اتغيرت',
			'وظيفته نفس وظيفة useEffect',
		],
		term: 'إيه فايدة React.memo؟',
	},
	{
		answer:
			'Feature بتخلي React تستنى لحد ما data أو component يبقى جاهز قبل الريندر',
		level: 'senior',
		options: [
			'Feature بتخلي React تستنى لحد ما data أو component يبقى جاهز قبل الريندر',
			'API للـ Error Handling',
			'طريقة لتخزين الكاش في المتصفح',
			'Hook لتشغيل asynchronous functions',
		],
		term: 'إيه هو Suspense في React؟',
	},
	{
		answer: 'Link بيعمل Navigation من غير ما يعمل reload كامل للصفحة',
		level: 'junior',
		options: [
			'الاتنين نفس الحاجة مفيش فرق',
			'Link بيتعامل بس مع External URLs',
			'Link بيعمل Navigation من غير ما يعمل reload كامل للصفحة',
			'a tag هو اللي بيدعم prefetch مش Link',
		],
		term: 'إيه الفرق بين Link في Next.js و a tag عادي؟',
	},
	{
		answer: 'تقسيم الكود لملفات أصغر عشان يحمل بس اللي محتاجه',
		level: 'mid',
		options: [
			'تقنية لكتابة الكود على أكتر من لغة',
			'تقسيم الكود لملفات أصغر عشان يحمل بس اللي محتاجه',
			'أداة في Node.js لتقسيم الملفات',
			'طريقة للتعامل مع الـ context API',
		],
		term: 'إيه المقصود بـ Code Splitting في React؟',
	},
	{
		answer: 'بيتنفذ بعد ما React تخلص تحديث الـ DOM مباشرة قبل ما المتصفح يرسم',
		level: 'senior',
		options: [
			'بيشتغل زي useEffect بالظبط',
			'بيتنفذ بعد ما React تخلص تحديث الـ DOM مباشرة قبل ما المتصفح يرسم',
			'خاص بالـ Server Side Rendering',
			'Hook لتخزين البيانات في memory',
		],
		term: 'إيه فايدة useLayoutEffect؟',
	},
	{
		answer: 'SSG بيتبني مرة وقت build، ISR بيسمح بتحديث الصفحات كل فترة زمنية',
		level: 'mid',
		options: [
			'الاتنين بيتحدثوا مع كل request',
			'ISR بيستخدم بس مع API Routes',
			'SSG بيتبني مرة وقت build، ISR بيسمح بتحديث الصفحات كل فترة زمنية',
			'SSG بيتبني على السيرفر وقت الـ request',
		],
		term: 'إيه الفرق بين Static Site Generation (SSG) و Incremental Static Regeneration (ISR)؟',
	},
	{
		answer: 'طريقة لمشاركة البيانات بين components من غير ما تبعت props كتير',
		level: 'junior',
		options: [
			'Hook جديد لإدارة الذاكرة',
			'Module خاص بالتعامل مع الـ API Calls',
			'أداة في Next.js عشان تـ fetch data',
			'طريقة لمشاركة البيانات بين components من غير ما تبعت props كتير',
		],
		term: 'إيه المقصود بـ Context API في React؟',
	},
	{
		answer: 'المحرك الداخلي الجديد لReact عشان يدير عملية الريندر بكفاءة',
		level: 'senior',
		options: [
			'مكتبة إضافية لعمل animations',
			'نوع من Hooks خاص بالـ async rendering',
			'Package منفصل عن React مسؤول عن routing',
			'المحرك الداخلي الجديد لReact عشان يدير عملية الريندر بكفاءة',
		],
		term: 'إيه هو React Fiber؟',
	},
	{
		answer: 'useMemo بيرجع قيمة محسوبة، useCallback بيرجع function memoized',
		level: 'mid',
		options: [
			'الاتنين بيرجعوا functions',
			'useMemo بيرجع قيمة محسوبة، useCallback بيرجع function memoized',
			'useCallback بيشتغل بس في Server Components',
			'useMemo بيستخدم عشان caching للـ API Calls',
		],
		term: 'إيه الفرق بين useMemo و useCallback؟',
	},
	{
		answer: 'بيحدد أي صفحات dynamic تتبني وقت build',
		level: 'mid',
		options: [
			'بيتحكم في الـ routing في client side',
			'بيحدد أي صفحات dynamic تتبني وقت build',
			'API مخصص للتعامل مع الصور',
			'خاصية بتخزن الـ cookies على السيرفر',
		],
		term: 'إيه فايدة getStaticPaths في Next.js؟',
	},
	{
		answer:
			'الخوارزمية اللي بتقارن بين Virtual DOM القديم والجديد وتحدث بس اللي اتغير',
		level: 'senior',
		options: [
			'الخوارزمية اللي بتقارن بين Virtual DOM القديم والجديد وتحدث بس اللي اتغير',
			'عملية تحديث الـ state في component',
			'الـ Hook اللي بيعمل re-render',
			'تقنية لحفظ نسخة احتياطية من الـ DOM',
		],
		term: 'إيه المقصود بـ Reconciliation في React؟',
	},
	{
		answer: 'API Routes في Next.js مبنية جوة المشروع ومش محتاجة سيرفر منفصل',
		level: 'mid',
		options: [
			'الاتنين بيشتغلوا بنفس الشكل بالظبط',
			'Express Routes بتشتغل بس مع TypeScript',
			'API Routes في Next.js مبنية جوة المشروع ومش محتاجة سيرفر منفصل',
			'API Routes لازم تتبني وقت build',
		],
		term: 'إيه الفرق بين API Routes في Next.js و Express Routes؟',
	},
	{
		answer:
			'بيخلي تحديثات معينة تعتبر low priority عشان ما تقطعش تجربة المستخدم',
		level: 'senior',
		options: [
			'بيتعامل مع الـ transitions في CSS',
			'خاص بالـ routing في Next.js',
			'بيخلي تحديثات معينة تعتبر low priority عشان ما تقطعش تجربة المستخدم',
			'Hook لتشغيل timers في React',
		],
		term: 'إيه فايدة useTransition Hook في React؟',
	},
	{
		answer:
			'React.lazy بيشتغل في client، dynamic import في Next.js بيدعم SSR كمان',
		level: 'senior',
		options: [
			'الاتنين بيعملوا نفس الوظيفة بالظبط',
			'React.lazy بيشتغل في client، dynamic import في Next.js بيدعم SSR كمان',
			'dynamic import بيستخدم بس للـ CSS',
			'React.lazy بيتعامل مع API Routes',
		],
		term: 'إيه الفرق بين React.lazy و dynamic import في Next.js؟',
	},
	{
		answer:
			'تمرير props من component لأخرى على مستويات متعددة حتى توصل للـ child المطلوب',
		level: 'junior',
		options: [
			'تمرير props من component لأخرى على مستويات متعددة حتى توصل للـ child المطلوب',
			'مكتبة للتعامل مع الـ forms',
			'Hook خاص بإدارة الـ global state',
			'تقنية لتقسيم الكود',
		],
		term: 'إيه معنى Prop Drilling؟',
	},
	{
		answer: 'طريقة تخلي component يتعرض في DOM مختلف عن parent بتاعه',
		level: 'mid',
		options: [
			'API خاص بالتعامل مع cookies',
			'Hook جديد في React 18 لإدارة state',
			'Feature في Next.js للتعامل مع images',
			'طريقة تخلي component يتعرض في DOM مختلف عن parent بتاعه',
		],
		term: 'يعني إيه React Portal؟',
	},
	{
		answer: 'نظام Routing جديد مبني على file-system وبيستعمل server components',
		level: 'mid',
		options: [
			'Router بديل لـ React Router',
			'نظام Routing جديد مبني على file-system وبيستعمل server components',
			'Package خارجي لتعامل مع APIs',
			'Hook بيتحكم في التنقل بين الصفحات',
		],
		term: 'إيه هو App Router في Next.js 13؟',
	},
	{
		answer: 'Components بتمنع الكراش لو حصل error في child components',
		level: 'senior',
		options: [
			'Hook بيتعامل مع exceptions في async functions',
			'API خاص بالـ SSR',
			'Components بتمنع الكراش لو حصل error في child components',
			'طريقة للتعامل مع cookies في المتصفح',
		],
		term: 'إيه فايدة Error Boundaries في React؟',
	},
	{
		answer:
			'Static Import بيتم وقت build، Dynamic Import بيحمل الكود وقت runtime',
		level: 'mid',
		options: [
			'الاتنين نفس الحاجة',
			'Static Import بيتم وقت build، Dynamic Import بيحمل الكود وقت runtime',
			'Dynamic Import بيستخدم بس مع CSS',
			'Static Import بيشتغل بس في API Routes',
		],
		term: 'إيه الفرق بين Static Import و Dynamic Import في Next.js؟',
	},
	{
		answer: 'تقنية في bundlers بتشيل الكود اللي مش مستخدم من final bundle',
		level: 'senior',
		options: [
			'مكتبة للتحكم في DOM',
			'API في React للتعامل مع forms',
			'طريقة لتخزين البيانات في cache',
			'تقنية في bundlers بتشيل الكود اللي مش مستخدم من final bundle',
		],
		term: 'إيه معنى Tree Shaking؟',
	},
	{
		answer:
			'Components بتتعمل render على السيرفر وتتبعت كـ serialized data للمتصفح',
		level: 'senior',
		options: [
			'Components بتشتغل بس في الـ client',
			'Hook جديد لإدارة الـ forms',
			'API مخصص للـ authentication',
			'Components بتتعمل render على السيرفر وتتبعت كـ serialized data للمتصفح',
		],
		term: 'إيه المقصود بـ RSC (React Server Components)؟',
	},
	{
		answer:
			'useRef بيحتفظ بنفس الـ ref في كل render، createRef بيعمل ref جديد في كل render',
		level: 'mid',
		options: [
			'createRef أسرع من useRef',
			'useRef بيحتفظ بنفس الـ ref في كل render، createRef بيعمل ref جديد في كل render',
			'useRef لازم يتخزن في state',
			'الاتنين نفس الحاجة بالظبط',
		],
		term: 'إيه الفرق بين useRef و createRef؟',
	},
	{
		answer: 'كود بيتنفذ قبل ما request يوصل للـ route النهائي',
		level: 'senior',
		options: [
			'Hook خاص بالـ routing',
			'Component بيتحكم في error boundaries',
			'كود بيتنفذ قبل ما request يوصل للـ route النهائي',
			'Package لإدارة cookies',
		],
		term: 'إيه هو Next.js Middleware؟',
	},
	{
		answer: 'أداة بتساعدك تعرف زمن الريندر واستهلاك الـ performance',
		level: 'mid',
		options: [
			'Hook جديد للـ debugging',
			'Component خاص بالـ error handling',
			'Package خارجي للـ logging',
			'أداة بتساعدك تعرف زمن الريندر واستهلاك الـ performance',
		],
		term: 'إيه هو React Profiler؟',
	},
	{
		answer: 'طريقة قديمة لجلب البيانات قبل ما الصفحة تتعرض',
		level: 'senior',
		options: [
			'Hook جديد لإدارة data fetching',
			'API خاص بالـ middleware',
			'طريقة قديمة لجلب البيانات قبل ما الصفحة تتعرض',
			'أداة caching للـ API calls',
		],
		term: 'إيه فايدة getInitialProps في Next.js؟',
	},
	{
		answer: 'CSR بيبني الصفحة في المتصفح، SSR بيبنيها في السيرفر',
		level: 'junior',
		options: [
			'CSR أسرع دايمًا من SSR',
			'CSR بيبني الصفحة في المتصفح، SSR بيبنيها في السيرفر',
			'SSR بيشتغل بس مع API Routes',
			'CSR بيتطلب TypeScript دايمًا',
		],
		term: 'إيه الفرق بين CSR و SSR؟',
	},
	{
		answer: 'CMS بيقدم APIs بس، وNext.js بيعرض البيانات في الواجهة',
		level: 'mid',
		options: [
			'CMS بيقدم APIs بس، وNext.js بيعرض البيانات في الواجهة',
			'CMS بيشتغل جوا السيرفر بتاع Next.js',
			'Hook لإدارة state',
			'Component خاص بعرض SEO tags',
		],
		term: 'إيه المقصود بـ Headless CMS مع Next.js؟',
	},
	{
		answer: 'Hook بيخليك تتحكم في القيم اللي بيصدرها ref للـ parent',
		level: 'senior',
		options: [
			'Hook خاص بالـ animations',
			'Hook بيخليك تتحكم في القيم اللي بيصدرها ref للـ parent',
			'API في Next.js للتعامل مع cookies',
			'طريقة لتخزين state في context',
		],
		term: 'إيه هو useImperativeHandle؟',
	},
	{
		answer: 'بيولد IDs فريدة عشان تضمن تماسك بين client و server',
		level: 'mid',
		options: [
			'Hook لإدارة التواريخ',
			'API للتعامل مع external APIs',
			'Component خاص بالـ SEO',
			'بيولد IDs فريدة عشان تضمن تماسك بين client و server',
		],
		term: 'إيه فايدة useId؟',
	},
	{
		answer:
			'Pages Router قديم بيعتمد على pages folder، App Router جديد بيعتمد على app folder',
		level: 'mid',
		options: [
			'الاتنين نفس الوظيفة بالظبط',
			'Pages Router قديم بيعتمد على pages folder، App Router جديد بيعتمد على app folder',
			'App Router بيستخدم بس في الـ client side',
			'Pages Router مش بيدعم TypeScript',
		],
		term: 'إيه الفرق بين Pages Router و App Router في Next.js؟',
	},
	{
		answer:
			'تقنية بتخلي React تقدر تقطع الريندر وتكمل بعدين من غير ما يهنج الـ UI',
		level: 'senior',
		options: [
			'API خاص بالـ Error Handling',
			'Hook بيتعامل مع promises',
			'تقنية بتخلي React تقدر تقطع الريندر وتكمل بعدين من غير ما يهنج الـ UI',
			'Feature في Next.js لتسريع الصور',
		],
		term: 'إيه هو Concurrent Rendering في React؟',
	},
	{
		answer: 'إنك تقدر تستخدم الـ App Router تدريجيًا جنب Pages Router',
		level: 'mid',
		options: [
			'خاصية لتقسيم الكود',
			'إنك تقدر تستخدم الـ App Router تدريجيًا جنب Pages Router',
			'Hook جديد للـ SSR',
			'API خاص بالـ data caching',
		],
		term: 'إيه معنى Incremental Adoption في Next.js؟',
	},
	{
		answer: 'ميزة بتخلي الصور تتضغط وتتحمل بدقة مختلفة حسب الجهاز',
		level: 'junior',
		options: [
			'Hook للـ animations',
			'ميزة بتخلي الصور تتضغط وتتحمل بدقة مختلفة حسب الجهاز',
			'API خاص بالـ forms',
			'Component بيتعامل مع routing',
		],
		term: 'إيه هو Image Optimization في Next.js؟',
	},
	{
		answer: 'الأول بيتنفذ بعد ما المتصفح يرسم، والتاني بيتنفذ قبل الرسم',
		level: 'senior',
		options: [
			'الاتنين بيتنفذوا في نفس الوقت',
			'useLayoutEffect مالوش cleanup',
			'cleanup function في useEffect بتشتغل بس مع SSR',
			'الأول بيتنفذ بعد ما المتصفح يرسم، والتاني بيتنفذ قبل الرسم',
		],
		term: 'إيه الفرق بين useEffect cleanup function و useLayoutEffect cleanup function؟',
	},
	{
		answer: 'Functions بتشتغل على الـ CDN edge عشان تقلل الـ latency',
		level: 'senior',
		options: [
			'Hook خاص بالتعامل مع context',
			'Functions بتشتغل على الـ CDN edge عشان تقلل الـ latency',
			'API لتعامل مع الصور',
			'Component للـ SSR',
		],
		term: 'إيه المقصود بـ Edge Functions في Next.js؟',
	},
	{
		answer:
			'Error بيحصل لما الـ HTML اللي جه من السيرفر يختلف عن اللي React بيحاول يرسمه في الـ client',
		level: 'senior',
		options: [
			'Error بيحصل لما الـ HTML اللي جه من السيرفر يختلف عن اللي React بيحاول يرسمه في الـ client',
			'Error خاص بالـ API Routes',
			'Error في React Hooks لما تستخدمهم غلط',
			'Error بيظهر لما تستخدم TypeScript مع Next.js',
		],
		term: 'إيه معنى hydration error في Next.js؟',
	},
	{
		answer: 'Hook بيأخر تحديث قيمة معينة عشان ميأثرش على responsiveness',
		level: 'senior',
		options: [
			'Hook خاص بالـ animations',
			'API لتعامل مع الـ caching',
			'Hook بيأخر تحديث قيمة معينة عشان ميأثرش على responsiveness',
			'Feature في Next.js للـ routing',
		],
		term: 'إيه هو useDeferredValue؟',
	},
	{
		answer: 'useContext بيقرأ القيمة، Provider بيوزع القيمة على children',
		level: 'junior',
		options: [
			'الاتنين نفس الحاجة',
			'useContext بيقرأ القيمة، Provider بيوزع القيمة على children',
			'useContext بيشتغل بس مع class components',
			'Provider مش محتاج يتلف حوالين children',
		],
		term: 'إيه الفرق بين useContext و Context.Provider؟',
	},
	{
		answer:
			'ميزة بتخلي الكود يتحدث بسرعة من غير ما يفقد الـ state أثناء التطوير',
		level: 'junior',
		options: [
			'Hook خاص بالـ performance',
			'API لتعامل مع images',
			'Feature لتوليد static pages',
			'ميزة بتخلي الكود يتحدث بسرعة من غير ما يفقد الـ state أثناء التطوير',
		],
		term: 'إيه هو Fast Refresh في Next.js؟',
	},
	{
		answer:
			'Feature بتساعد تكشف مشاكل محتملة زي side effects أو استخدام APIs deprecated',
		level: 'mid',
		options: [
			'Mode بيخلي React يشتغل أسرع',
			'Feature بتساعد تكشف مشاكل محتملة زي side effects أو استخدام APIs deprecated',
			'Hook خاص بالـ debugging',
			'Component للـ error handling',
		],
		term: 'إيه هو React Strict Mode؟',
	},
	{
		answer: 'useInsertionEffect بيتنفذ قبل ما الـ styles تضاف للـ DOM',
		level: 'senior',
		options: [
			'useEffect بيتنفذ قبل المتصفح يرسم',
			'useInsertionEffect بيتعامل مع API calls',
			'useInsertionEffect بيتنفذ قبل ما الـ styles تضاف للـ DOM',
			'الاتنين نفس الحاجة',
		],
		term: 'إيه الفرق بين useEffect و useInsertionEffect؟',
	},
	{
		answer: 'طريقة لتنظيم الملفات في app router من غير ما تأثر على URL',
		level: 'mid',
		options: [
			'API لتجميع الـ API routes',
			'Feature للـ middleware',
			'طريقة لتنظيم الملفات في app router من غير ما تأثر على URL',
			'Component لتجميع children',
		],
		term: 'إيه معنى Route Groups في Next.js 13؟',
	},
	{
		answer:
			'Hook بيسمح بعمل subscribe لمصدر بيانات خارجي مع ضمان التوافق مع concurrent rendering',
		level: 'senior',
		options: [
			'Hook خاص بالـ caching',
			'Hook بيسمح بعمل subscribe لمصدر بيانات خارجي مع ضمان التوافق مع concurrent rendering',
			'API Routes handler',
			'أداة للـ debugging',
		],
		term: 'إيه فايدة useSyncExternalStore؟',
	},
	{
		answer: 'lazy initialization بيحسب القيمة مرة واحدة بس وقت أول render',
		level: 'mid',
		options: [
			'الفرق إن العادي أسرع',
			'lazy initialization بيستخدم بس في server components',
			'lazy initialization بيحسب القيمة مرة واحدة بس وقت أول render',
			'الاتنين نفس الأداء',
		],
		term: 'إيه الفرق بين useState lazy initialization و initialization العادي؟',
	},
	{
		answer:
			'أداة browser extension بتسهل الـ debugging والـ performance tracking للـ components',
		level: 'junior',
		options: [
			'Hook خاص بالـ debugging',
			'أداة browser extension بتسهل الـ debugging والـ performance tracking للـ components',
			'Component للـ logging',
			'API في Next.js للتعامل مع metadata',
		],
		term: 'إيه هو React DevTools؟',
	},
	{
		answer: 'Image بتعمل optimization وتحميل تدريجي، img عادية لأ',
		level: 'mid',
		options: [
			'Image بتعمل optimization وتحميل تدريجي، img عادية لأ',
			'الاتنين نفس الوظيفة بالظبط',
			'img tag مش بتدعم الصور من API',
			'Image لازم تستخدم بس في SSR',
		],
		term: 'إيه الفرق بين Image component في Next.js و img tag عادية؟',
	},
	{
		answer: 'بيحدد إزاي Next.js يتصرف لو المستخدم دخل صفحة مش متولدة وقت build',
		level: 'mid',
		options: [
			'بيتحكم في SEO metadata',
			'خاصية للتعامل مع cookies',
			'بيحدد إزاي Next.js يتصرف لو المستخدم دخل صفحة مش متولدة وقت build',
			'Hook خاص بالـ routing',
		],
		term: 'إيه فايدة fallback في getStaticPaths؟',
	},
	{
		answer: 'Mode بيخلي React يقطع ويكمل الريندر حسب الأولوية',
		level: 'senior',
		options: [
			'Mode بيخلي الـ Hooks تشتغل concurrent',
			'Mode خاص بالـ SSR',
			'Mode لتشغيل الكود على thread تاني',
			'Mode بيخلي React يقطع ويكمل الريندر حسب الأولوية',
		],
		term: 'إيه معنى React Concurrent Mode؟',
	},
	{
		answer:
			'طريقة جديدة لتعريف SEO tags زي title, description, open graph في app router',
		level: 'mid',
		options: [
			'API للتعامل مع الصور',
			'Component خاص بالـ routing',
			'Hook خاص بالـ performance',
			'طريقة جديدة لتعريف SEO tags زي title, description, open graph في app router',
		],
		term: 'إيه هو Metadata API في Next.js 13؟',
	},
	{
		answer: 'client-only بتستخدم في المتصفح، server-only بتشتغل بس على السيرفر',
		level: 'senior',
		options: [
			'الاتنين بيتشغلوا في أي مكان',
			'client-only بتستخدم في المتصفح، server-only بتشتغل بس على السيرفر',
			'server-only أسرع من client-only',
			'client-only مش بتدعم TypeScript',
		],
		term: 'إيه الفرق بين client-only packages و server-only packages في Next.js؟',
	},
	{
		answer: 'قائمة بتحدد إمتى React تعيد إنشاء الـ function',
		level: 'junior',
		options: [
			'Component بيحسب قيم جديدة',
			'Hook لتخزين dependencies',
			'قائمة بتحدد إمتى React تعيد إنشاء الـ function',
			'API لتخزين cache',
		],
		term: 'إيه هو useCallback dependency array؟',
	},
	{
		answer:
			'إنك تحط الكود أو الـ state قريب من المكان اللي بيستخدمه بدل ما يبقى global',
		level: 'mid',
		options: [
			'تقنية لتقسيم الكود',
			'إنك تحط الكود أو الـ state قريب من المكان اللي بيستخدمه بدل ما يبقى global',
			'API في Next.js',
			'Feature للـ CSS in JS',
		],
		term: 'إيه معنى colocation في React apps؟',
	},
	{
		answer:
			'shallow routing بيغير الـ URL من غير ما يعيد تنفيذ data fetching methods',
		level: 'mid',
		options: [
			'shallow routing بيغير الـ URL من غير ما يعيد تنفيذ data fetching methods',
			'الاتنين نفس الأداء',
			'full page navigation أسرع من shallow routing',
			'shallow routing بيشتغل بس مع API routes',
		],
		term: 'إيه الفرق بين shallow routing و full page navigation في Next.js؟',
	},
	{
		answer: 'بيسمحلك ترجع أكتر من element من غير div إضافي',
		level: 'junior',
		options: [
			'بيسمحلك ترجع أكتر من element من غير div إضافي',
			'Hook للـ state management',
			'API للتعامل مع APIs الخارجية',
			'Component خاص بالـ performance',
		],
		term: 'إيه فايدة React.Fragment؟',
	},
	{
		answer: 'تحديد إزاي البيانات تتخزن وتتجدد سواء على edge أو server',
		level: 'senior',
		options: [
			'Hook خاص بالـ API calls',
			'Feature للتعامل مع CSS',
			'تحديد إزاي البيانات تتخزن وتتجدد سواء على edge أو server',
			'Component للـ routing',
		],
		term: 'إيه هو caching strategy في Next.js؟',
	},
	{
		answer:
			'useEvent بيضمن إنك تمسك reference ثابت للـ event handler حتى مع rerenders',
		level: 'senior',
		options: [
			'الاتنين نفس الحاجة',
			'useEvent بيضمن إنك تمسك reference ثابت للـ event handler حتى مع rerenders',
			'useEvent بيشتغل بس في server components',
			'useEffect لازم يتكتب مع useEvent',
		],
		term: 'إيه الفرق بين useEffect و useEvent (React RFC)؟',
	},
	{
		answer: 'إنك تستخدم [...param] أو [[...param]] عشان تمسك أي URL parameters',
		level: 'mid',
		options: [
			'Hook لإدارة routes',
			'API Routes handler',
			'Component خاص بالـ navigation',
			'إنك تستخدم [...param] أو [[...param]] عشان تمسك أي URL parameters',
		],
		term: 'إيه هو Dynamic Routes Catch-all في Next.js؟',
	},
];
