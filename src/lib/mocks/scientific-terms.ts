export interface ScientificTerm {
	definition: string;
	example?: string;
	id: string;
	term: string;
}

export const scientificTerms: ScientificTerm[] = [
	{
		definition: 'طريقة لرفع المتغيرات والدوال إلى أعلى النطاق قبل تنفيذ الكود',
		example: 'يمكن استخدام متغير قبل تعريفه بسبب الرفع',
		id: '1',
		term: 'Hoisting',
	},
	{
		definition:
			'دالة داخلية تحتفظ بالوصول لمتغيرات الدالة الخارجية حتى بعد انتهاء تنفيذها',
		example: 'إنشاء دوال خاصة أو حفظ الحالة في event handlers',
		id: '2',
		term: 'Closure',
	},
	{
		definition: 'طريقة لربط الدوال بالكائنات، يحدد قيمة this في الدالة',
		example: 'call(), apply(), bind() لتحديد السياق',
		id: '3',
		term: 'Function Binding',
	},
	{
		definition: 'طريقة لتنفيذ الكود بشكل غير متزامن باستخدام Promises',
		example: 'async function fetchData() { const data = await api.get() }',
		id: '4',
		term: 'Async/Await',
	},
	{
		definition: 'كائن يمثل عملية غير متزامنة قد تنجح أو تفشل في المستقبل',
		example: 'fetch(url).then(response => response.json())',
		id: '5',
		term: 'Promise',
	},
	{
		definition: 'طريقة لنسخ الكائنات والمصفوفات بشكل سطحي أو عميق',
		example: 'const newObj = { ...oldObj } أو Object.assign()',
		id: '6',
		term: 'Shallow/Deep Copy',
	},
	{
		definition: 'طريقة لتحويل الكائنات إلى نصوص JSON والعكس',
		example: 'JSON.stringify(obj) و JSON.parse(string)',
		id: '7',
		term: 'JSON',
	},
	{
		definition: 'طريقة لتنفيذ الكود بعد فترة زمنية محددة أو بشكل متكرر',
		example: 'setTimeout(() => {}, 1000) و setInterval()',
		id: '8',
		term: 'setTimeout/setInterval',
	},
	{
		definition: 'طريقة لمعالجة الأحداث في DOM مثل النقر أو الكتابة',
		example: 'element.addEventListener("click", handler)',
		id: '9',
		term: 'Event Handling',
	},
	{
		definition: 'طريقة لمعالجة الأحداث باستخدام عنصر أب واحد بدلاً من كل عنصر',
		example:
			'document.addEventListener("click", (e) => { if(e.target.matches(".btn")) {} })',
		id: '10',
		term: 'Event Delegation',
	},

	// React Core Concepts
	{
		definition: 'مكتبة جافاسكريبت لبناء واجهات المستخدم التفاعلية، خاصة للويب',
		example: 'بناء تطبيق ويب تفاعلي مع مكونات قابلة لإعادة الاستخدام',
		id: '11',
		term: 'React',
	},
	{
		definition: 'طريقة لكتابة HTML داخل JavaScript بطريقة سهلة ومفهومة',
		example: 'const element = <h1>Hello World</h1>',
		id: '12',
		term: 'JSX',
	},
	{
		definition: 'جزء من الكود يمكن إعادة استخدامه في أجزاء مختلفة من التطبيق',
		example: 'مكون Button أو Header يمكن استخدامه في صفحات متعددة',
		id: '13',
		term: 'Component',
	},
	{
		definition: 'طريقة لإدارة البيانات داخل المكونات في React',
		example: 'تخزين عدد النقرات أو بيانات المستخدم',
		id: '14',
		term: 'State',
	},
	{
		definition: 'طريقة لتمرير البيانات من المكون الأب إلى المكون الابن',
		example: 'تمرير اسم المستخدم من الصفحة الرئيسية إلى مكون Header',
		id: '15',
		term: 'Props',
	},
	{
		definition: 'نسخة افتراضية من DOM الحقيقي تستخدمها React لتحسين الأداء',
		example: 'مقارنة التغييرات قبل تحديث الصفحة الفعلية',
		id: '16',
		term: 'Virtual DOM',
	},
	{
		definition: 'دالة خاصة في React لإدارة الحالة المحلية للمكون',
		example: 'const [count, setCount] = useState(0)',
		id: '17',
		term: 'useState',
	},
	{
		definition: 'دالة خاصة في React تسمح بإضافة تأثيرات جانبية للمكونات',
		example: 'جلب البيانات من API عند تحميل المكون',
		id: '18',
		term: 'useEffect',
	},
	{
		definition:
			'ميزة في React تسمح بتمرير البيانات عبر المكونات دون الحاجة لتمريرها يدوياً',
		example: 'مشاركة بيانات المستخدم بين جميع المكونات',
		id: '19',
		term: 'Context API',
	},
	{
		definition:
			'طريقة لتحسين أداء التطبيق عن طريق تحميل المكونات عند الحاجة فقط',
		example: 'تحميل مكون الصفحة فقط عندما يزور المستخدم تلك الصفحة',
		id: '20',
		term: 'Code Splitting',
	},
	{
		definition:
			'طريقة لتحسين الأداء عن طريق منع إعادة الرسم غير الضرورية للمكونات',
		example: 'React.memo() أو useMemo() لحفظ النتائج',
		id: '21',
		term: 'Memoization',
	},
	{
		definition: 'دالة خاصة في React لحفظ النتائج المكلفة حسابياً',
		example: 'const expensiveValue = useMemo(() => heavyCalculation(), [deps])',
		id: '22',
		term: 'useMemo',
	},
	{
		definition: 'دالة خاصة في React لحفظ الدوال ومنع إعادة إنشائها',
		example: 'const handleClick = useCallback(() => {}, [deps])',
		id: '23',
		term: 'useCallback',
	},
	{
		definition: 'دالة خاصة في React للوصول المباشر لعناصر DOM',
		example: 'const inputRef = useRef(null) ثم inputRef.current.focus()',
		id: '24',
		term: 'useRef',
	},
	{
		definition: 'دالة خاصة في React لإنشاء دوال مخصصة قابلة لإعادة الاستخدام',
		example: 'function useCounter() { return { count, increment } }',
		id: '25',
		term: 'Custom Hooks',
	},

	// State Management
	{
		definition: 'مكتبة لإدارة الحالة في تطبيقات React المعقدة',
		example: 'إدارة بيانات المستخدم والتطبيق في مكان واحد',
		id: '26',
		term: 'Redux',
	},
	{
		definition: 'مكتبة لإدارة الحالة في React بطريقة أبسط من Redux',
		example: 'إدارة الحالة المحلية والعالمية بسهولة',
		id: '27',
		term: 'Zustand',
	},
	{
		definition: 'مكتبة لإدارة الحالة في React مع دعم للبيانات غير المتزامنة',
		example: 'إدارة حالة الخوادم والبيانات المحلية',
		id: '28',
		term: 'SWR',
	},
	{
		definition: 'مكتبة لإدارة الحالة في React مع دعم للبيانات غير المتزامنة',
		example: 'إدارة حالة الخوادم والبيانات المحلية',
		id: '29',
		term: 'React Query',
	},

	// Next.js
	{
		definition:
			'إطار عمل مبني على React يوفر ميزات مثل Server-Side Rendering و Static Site Generation',
		example: 'بناء موقع ويب سريع مع تحسين محركات البحث',
		id: '30',
		term: 'Next.js',
	},
	{
		definition:
			'ميزة في Next.js تسمح بعرض الصفحات على الخادم قبل إرسالها للمتصفح',
		example: 'تحسين محركات البحث وسرعة التحميل الأولي',
		id: '31',
		term: 'Server-Side Rendering (SSR)',
	},
	{
		definition: 'ميزة في Next.js لإنشاء صفحات HTML ثابتة في وقت البناء',
		example: 'صفحات المدونات أو المنتجات التي لا تتغير كثيراً',
		id: '32',
		term: 'Static Site Generation (SSG)',
	},
	{
		definition: 'ميزة في Next.js لإنشاء صفحات ديناميكية عند الطلب',
		example: 'صفحات المنتجات أو المستخدمين التي تتغير كثيراً',
		id: '33',
		term: 'Incremental Static Regeneration (ISR)',
	},
	{
		definition: 'ميزة في Next.js لإنشاء API endpoints داخل التطبيق',
		example: 'إنشاء /api/users للحصول على بيانات المستخدمين',
		id: '34',
		term: 'API Routes',
	},

	// CSS & Styling
	{
		definition: 'طريقة لكتابة CSS باستخدام JavaScript مع دعم للمتغيرات والدوال',
		example: 'const Button = styled.button`color: ${props => props.color}`',
		id: '35',
		term: 'CSS-in-JS',
	},
	{
		definition: 'مكتبة لكتابة CSS باستخدام JavaScript مع دعم للمكونات',
		example: 'const StyledButton = styled.button`background: blue`',
		id: '36',
		term: 'Styled Components',
	},
	{
		definition: 'مكتبة CSS utility-first لبناء واجهات المستخدم بسرعة',
		example: 'className="bg-blue-500 text-white p-4 rounded"',
		id: '37',
		term: 'Tailwind CSS',
	},
	{
		definition: 'طريقة لكتابة CSS مع دعم للمتغيرات والدوال والتنسيق المتقدم',
		example: 'استخدام $variables و @mixins و nested selectors',
		id: '38',
		term: 'Sass/SCSS',
	},
	{
		definition: 'طريقة لكتابة CSS مع دعم للمتغيرات والدوال',
		example: 'استخدام @variables و @mixins',
		id: '39',
		term: 'Less',
	},
	{
		definition: 'طريقة لترتيب العناصر في الصفحة باستخدام Grid أو Flexbox',
		example: 'display: grid أو display: flex لترتيب العناصر',
		id: '40',
		term: 'CSS Layout',
	},

	// Performance & Optimization
	{
		definition:
			'طريقة لتحسين أداء التطبيق عن طريق تحميل المكونات عند الحاجة فقط',
		example: 'const LazyComponent = React.lazy(() => import("./Component"))',
		id: '41',
		term: 'Lazy Loading',
	},
	{
		definition: 'طريقة لتحسين أداء التطبيق عن طريق تقسيم الكود إلى أجزاء أصغر',
		example: 'تحميل كود الصفحة فقط عند زيارة تلك الصفحة',
		id: '42',
		term: 'Code Splitting',
	},
	{
		definition: 'طريقة لتحسين أداء التطبيق عن طريق تخزين النتائج مؤقتاً',
		example: 'تخزين نتائج API calls أو العمليات المكلفة',
		id: '43',
		term: 'Caching',
	},
	{
		definition: 'طريقة لتحسين أداء التطبيق عن طريق تقليل حجم الملفات',
		example: 'ضغط JavaScript و CSS و الصور',
		id: '44',
		term: 'Bundle Optimization',
	},
	{
		definition: 'طريقة لتحسين أداء التطبيق عن طريق تحسين الصور',
		example: 'ضغط الصور أو استخدام formats حديثة مثل WebP',
		id: '45',
		term: 'Image Optimization',
	},

	// Testing
	{
		definition: 'مكتبة لاختبار تطبيقات React بطريقة سهلة ومرنة',
		example: 'render(<Component />) و expect(element).toBeInTheDocument()',
		id: '46',
		term: 'React Testing Library',
	},
	{
		definition: 'مكتبة لاختبار تطبيقات React بطريقة تقليدية',
		example: 'shallow(<Component />) و find() و simulate()',
		id: '47',
		term: 'Enzyme',
	},
	{
		definition: 'مكتبة لاختبار JavaScript مع دعم للـ mocking و assertions',
		example: 'describe(), it(), expect() لكتابة الاختبارات',
		id: '48',
		term: 'Jest',
	},
	{
		definition: 'طريقة لاختبار التطبيق من منظور المستخدم النهائي',
		example: 'اختبار تسجيل الدخول أو إضافة منتج للسلة',
		id: '49',
		term: 'E2E Testing',
	},
	{
		definition: 'طريقة لاختبار المكونات بشكل منفصل عن باقي التطبيق',
		example: 'اختبار مكون Button أو Form بشكل مستقل',
		id: '50',
		term: 'Unit Testing',
	},
];
