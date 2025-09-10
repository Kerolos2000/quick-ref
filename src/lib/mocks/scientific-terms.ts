export interface ScientificTerm {
	definition: string;
	id: string;
	tag: string[];
	term: string;
}

export const scientificTerms: ScientificTerm[] = [
	{
		definition:
			'HyperText Markup Language هي اللغة الأساسية لبناء صفحات الويب لتحديد هيكل الصفحة والمحتوى.',
		id: '1',
		tag: ['HTML'],
		term: 'HTML',
	},
	{
		definition:
			'نظام تخطيط مرن في CSS يسمح بمحاذاة وتوزيع العناصر داخل الحاوية بطريقة ديناميكية.',
		id: '2',
		tag: ['CSS'],
		term: 'CSS Flexbox',
	},
	{
		definition:
			'نظام تخطيط ثنائي الأبعاد في CSS لإنشاء تصميمات متقدمة من خلال صفوف وأعمدة.',
		id: '3',
		tag: ['CSS'],
		term: 'CSS Grid',
	},
	{
		definition: 'هيكل بيانات لتخزين مجموعة قيم يمكن الوصول لها باستخدام index.',
		id: '4',
		tag: ['JS'],
		term: 'JavaScript Array',
	},
	{
		definition:
			'هيكل بيانات لتخزين أزواج key-value مع إمكانية تعريف خصائص ودوال.',
		id: '5',
		tag: ['JS'],
		term: 'JavaScript Object',
	},
	{
		definition:
			'وحدة بناء واجهة المستخدم في React، يمكن أن تكون Functional أو Class Component.',
		id: '6',
		tag: ['React'],
		term: 'React Component',
	},
	{
		definition:
			'كائن لتخزين البيانات الداخلية للمكون التي تتغير وتسبب إعادة رندر عند تحديثها.',
		id: '7',
		tag: ['React'],
		term: 'React State',
	},
	{
		definition:
			'خصائص تمرر من Component أب إلى Component فرعي وتكون read-only.',
		id: '8',
		tag: ['React'],
		term: 'React Props',
	},
	{
		definition:
			'ملف React Component داخل مجلد pages يمثل route مختلف ويستفيد من SSR وSSG.',
		id: '9',
		tag: ['Next'],
		term: 'Next.js Page',
	},
	{
		definition:
			'ملف داخل pages/api لإنشاء endpoints يمكن التعامل معها مباشرة من السيرفر.',
		id: '10',
		tag: ['Next'],
		term: 'Next.js API Route',
	},
	{
		definition:
			'كائن يمثل نتيجة عملية غير متزامنة يمكن أن تنجح أو تفشل، ويدعم then/catch وasync/await.',
		id: '11',
		tag: ['JS'],
		term: 'JavaScript Promise',
	},
	{
		definition: 'دالة تُمرر كوسيط إلى دالة أخرى لتنفيذها بعد انتهاء العملية.',
		id: '12',
		tag: ['JS'],
		term: 'JavaScript Callback',
	},
	{
		definition:
			'مجموعة أدوات جاهزة لتسهيل بناء واجهات المستخدم مثل React وAngular وVue.',
		id: '13',
		tag: ['Front-end'],
		term: 'Front-end Framework',
	},
	{
		definition: 'اختبار يُطبق على أصغر وحدة برمجية للتحقق من عملها بشكل صحيح.',
		id: '14',
		tag: ['Testing'],
		term: 'Unit Test',
	},
	{
		definition: 'اختبار لضمان عمل وحدات متعددة معًا بشكل صحيح.',
		id: '15',
		tag: ['Testing'],
		term: 'Integration Test',
	},
	{
		definition:
			'تصميم واجهات تعمل بشكل مناسب على جميع أحجام الشاشات باستخدام CSS مرن.',
		id: '16',
		tag: ['CSS'],
		term: 'Responsive Design',
	},
	{
		definition:
			'نسخة افتراضية من DOM تستخدمها React لمقارنة التغييرات وتحسين الأداء.',
		id: '17',
		tag: ['React'],
		term: 'Virtual DOM',
	},
	{
		definition:
			'صيغة كتابة شبيهة بالـ HTML داخل JavaScript لإنشاء واجهات المستخدم في React.',
		id: '18',
		tag: ['React'],
		term: 'JSX',
	},
	{
		definition:
			'إضافة مستمع حدث على عنصر parent لمراقبة أحداث children لتقليل استهلاك الذاكرة.',
		id: '19',
		tag: ['JS'],
		term: 'Event Delegation',
	},
	{
		definition:
			'قيم قابلة لإعادة الاستخدام في CSS لتسهيل الصيانة وتغيير التصميم بسهولة.',
		id: '20',
		tag: ['CSS'],
		term: 'CSS Variables',
	},
	{
		definition:
			'وظائف تسمح باستخدام state وميزات أخرى في Functional Components.',
		id: '21',
		tag: ['React'],
		term: 'React Hooks',
	},
	{
		definition:
			'Hook في React لتعريف وإدارة state محلي داخل Functional Component.',
		id: '22',
		tag: ['React'],
		term: 'useState',
	},
	{
		definition:
			'Hook في React لتنفيذ side effects مثل استدعاء API أو الاشتراك في أحداث.',
		id: '23',
		tag: ['React'],
		term: 'useEffect',
	},
	{
		definition:
			'مشاركة البيانات بين المكونات بدون تمرير props يدوياً عبر كل مستوى.',
		id: '24',
		tag: ['React'],
		term: 'React Context',
	},
	{
		definition: 'مكتبة لإدارة التنقل (Routing) داخل تطبيقات React.',
		id: '25',
		tag: ['React'],
		term: 'React Router',
	},
	{
		definition: 'دالة لجلب البيانات أثناء build time لتوليد صفحات ثابتة.',
		id: '26',
		tag: ['Next'],
		term: 'Next.js getStaticProps',
	},
	{
		definition: 'دالة لجلب البيانات من السيرفر في كل طلب قبل عرض الصفحة.',
		id: '27',
		tag: ['Next'],
		term: 'Next.js getServerSideProps',
	},
	{
		definition:
			'دالة تعمل قبل الوصول للـ API Route أو الصفحة للتحقق أو إعادة التوجيه.',
		id: '28',
		tag: ['Next'],
		term: 'Next.js Middleware',
	},
	{
		definition: 'واجهة لإجراء طلبات HTTP من المتصفح وتدعم Promises.',
		id: '29',
		tag: ['JS'],
		term: 'JavaScript Fetch API',
	},
	{
		definition:
			'طريقة لإدارة العمليات غير المتزامنة باستخدام Promises بطريقة تسلسلية واضحة.',
		id: '30',
		tag: ['JS'],
		term: 'JavaScript Async/Await',
	},
	{
		definition:
			'مساحة تخزين في المتصفح تحفظ بيانات على شكل key-value بشكل دائم.',
		id: '31',
		tag: ['JS'],
		term: 'Local Storage',
	},
	{
		definition:
			'تخزين بيانات مؤقتة تبقى خلال جلسة المتصفح وتُمسح عند إغلاق التبويب.',
		id: '32',
		tag: ['JS'],
		term: 'Session Storage',
	},
	{
		definition:
			'خاصية في Flexbox تسمح للعناصر بالانتقال لسطر جديد إذا لم تتسع الحاوية.',
		id: '33',
		tag: ['CSS'],
		term: 'CSS Flex-wrap',
	},
	{
		definition:
			'تحدد كيفية وضع العنصر داخل الصفحة بالقيم static, relative, absolute, fixed, sticky.',
		id: '34',
		tag: ['CSS'],
		term: 'CSS Position',
	},
	{
		definition:
			'واجهة تمثل هيكل HTML في الصفحة على شكل شجرة يمكن التفاعل معها باستخدام JavaScript.',
		id: '35',
		tag: ['JS'],
		term: 'JavaScript DOM',
	},
	{
		definition:
			'وظيفة تُسجل على عنصر لمراقبة أحداث محددة وتنفيذ الكود عند حدوثها.',
		id: '36',
		tag: ['JS'],
		term: 'JavaScript Event Listener',
	},
	{
		definition: 'تطبيق أنماط مختلفة حسب حجم الشاشة لتصميم واجهات متجاوبة.',
		id: '37',
		tag: ['CSS'],
		term: 'CSS Media Queries',
	},
	{
		definition: 'عنصر لتجميع عناصر دون إضافة عنصر DOM إضافي.',
		id: '38',
		tag: ['React'],
		term: 'React Fragment',
	},
	{
		definition:
			'خاصية فريدة تُستخدم مع القوائم لتتبع العناصر عند إعادة الرندر.',
		id: '39',
		tag: ['React'],
		term: 'React Keys',
	},
	{
		definition:
			'تحدد ترتيب ظهور العناصر على المحور z، كلما كانت القيمة أكبر يكون العنصر أعلى.',
		id: '40',
		tag: ['CSS'],
		term: 'CSS Z-index',
	},
	{
		definition:
			'Hook لإنشاء مرجع لعناصر DOM أو لقيم يمكن الاحتفاظ بها بين renders.',
		id: '41',
		tag: ['React'],
		term: 'React useRef',
	},
	{
		definition:
			'Hook لتخزين قيمة محسوبة بحيث لا يتم إعادة حسابها إلا عند تغير dependencies.',
		id: '42',
		tag: ['React'],
		term: 'React useMemo',
	},
	{
		definition:
			'Hook لتخزين دالة بحيث لا تتغير إلا عند تغير dependencies المحددة.',
		id: '43',
		tag: ['React'],
		term: 'React useCallback',
	},
	{
		definition:
			'تحميل Components عند الحاجة فقط بدلاً من تحميل كل المكونات عند البداية.',
		id: '44',
		tag: ['React'],
		term: 'React Lazy Loading',
	},
	{
		definition:
			'تحسين الصور تلقائيًا باستخدام <Image> لتقليل الحجم وتحسين الأداء.',
		id: '45',
		tag: ['Next'],
		term: 'Next.js Image Optimization',
	},
	{
		definition: 'إنشاء صفحات HTML ثابتة أثناء build time لتحسين الأداء وSEO.',
		id: '46',
		tag: ['Next'],
		term: 'Next.js Static Generation',
	},
	{
		definition:
			'تحديث صفحات Static Generated جزئيًا بعد نشر التطبيق دون إعادة بناء كل الصفحات.',
		id: '47',
		tag: ['Next'],
		term: 'Next.js Incremental Static Regeneration',
	},
	{
		definition:
			'تطبيق أنماط على عناصر بناءً على حالة معينة مثل hover أو active.',
		id: '48',
		tag: ['CSS'],
		term: 'CSS Pseudo-class',
	},
	{
		definition:
			'إنشاء عناصر افتراضية داخل العنصر مثل ::before و::after لتطبيق أنماط إضافية.',
		id: '49',
		tag: ['CSS'],
		term: 'CSS Pseudo-element',
	},
	{
		definition:
			'استخراج القيم من Arrays أو Objects وتخزينها في متغيرات مستقلة.',
		id: '50',
		tag: ['JS'],
		term: 'JavaScript Destructuring',
	},
	{
		definition: 'توسيع عناصر Array أو Object داخل Array أو Object آخر.',
		id: '51',
		tag: ['JS'],
		term: 'JavaScript Spread Operator',
	},
	{
		definition: 'تجميع مجموعة من المعاملات غير المعرفة في Array واحدة.',
		id: '52',
		tag: ['JS'],
		term: 'JavaScript Rest Parameter',
	},
	{
		definition: 'دالة على Array تنشئ Array جديد بتحويل كل عنصر وفق دالة محددة.',
		id: '53',
		tag: ['JS'],
		term: 'JavaScript Map',
	},
	{
		definition:
			'دالة على Array تُرجع Array جديد يحتوي على العناصر التي تحقق شرطًا معينًا.',
		id: '54',
		tag: ['JS'],
		term: 'JavaScript Filter',
	},
	{
		definition:
			'دالة على Array تحوّل جميع عناصره إلى قيمة واحدة باستخدام دالة accumulator.',
		id: '55',
		tag: ['JS'],
		term: 'JavaScript Reduce',
	},
	{
		definition: 'تحديد مدة وتأثير الانتقال بين القيم المختلفة لخاصية CSS.',
		id: '56',
		tag: ['CSS'],
		term: 'CSS Transition',
	},
	{
		definition: 'تحريك خصائص CSS على مدى زمن محدد باستخدام keyframes.',
		id: '57',
		tag: ['CSS'],
		term: 'CSS Animation',
	},
	{
		definition:
			'مكون يلتقط أخطاء JavaScript في شجرة المكونات ويعرض fallback UI.',
		id: '58',
		tag: ['React'],
		term: 'React Error Boundary',
	},
	{
		definition:
			'مكون لتأجيل عرض Child Components حتى يتم تحميل البيانات أو المكونات الأخرى.',
		id: '59',
		tag: ['React'],
		term: 'React Suspense',
	},
	{
		definition: 'أداة لمساعدتك على اكتشاف المشاكل في المكونات أثناء التطوير.',
		id: '60',
		tag: ['React'],
		term: 'React Strict Mode',
	},
	{
		definition: 'انتقال الحدث من العنصر المستهدف إلى العناصر الأعلى في DOM.',
		id: '61',
		tag: ['JS'],
		term: 'JS Event Bubbling',
	},
	{
		definition: 'انتقال الحدث من العنصر الأعلى إلى العنصر المستهدف في DOM.',
		id: '62',
		tag: ['JS'],
		term: 'JS Event Capturing',
	},
	{
		definition:
			'تمثل كيفية حساب المساحة حول العناصر: margin, border, padding, content.',
		id: '63',
		tag: ['CSS'],
		term: 'CSS Box Model',
	},
	{
		definition:
			'تحديد طريقة عرض المحتوى إذا تجاوز حجم العنصر: visible, hidden, scroll, auto.',
		id: '64',
		tag: ['CSS'],
		term: 'CSS Overflow',
	},
	{
		definition: 'رفع تعريف المتغيرات والدوال إلى أعلى نطاقها قبل تنفيذ الكود.',
		id: '65',
		tag: ['JS'],
		term: 'JavaScript Hoisting',
	},
	{
		definition:
			'دالة تتذكر البيئة التي تم إنشاؤها فيها حتى بعد انتهاء تنفيذها.',
		id: '66',
		tag: ['JS'],
		term: 'JavaScript Closures',
	},
	{
		definition:
			'Immediately Invoked Function Expression، دالة تنفذ مباشرة بعد تعريفها.',
		id: '67',
		tag: ['JS'],
		term: 'JavaScript IIFE',
	},
	{
		definition:
			'آلية لإظهار Child Component في مكان مختلف داخل DOM خارج الشجرة الحالية.',
		id: '68',
		tag: ['React'],
		term: 'React Portal',
	},
	{
		definition: 'تغليف Component لتجنب إعادة الرندر إلا عند تغير props.',
		id: '69',
		tag: ['React'],
		term: 'React Memo',
	},
	{
		definition: 'كائن لتخزين قيم فريدة فقط.',
		id: '70',
		tag: ['JS'],
		term: 'JavaScript Set',
	},
	{
		definition: 'كائن لتخزين أزواج key-value حيث يمكن أن يكون المفتاح أي نوع.',
		id: '71',
		tag: ['JS'],
		term: 'JavaScript Map Object',
	},
	{
		definition: 'تحديد شكل قابل للقص للعناصر باستخدام CSS.',
		id: '72',
		tag: ['CSS'],
		term: 'CSS Clip-path',
	},
	{
		definition: 'تحديد شفافية العنصر.',
		id: '73',
		tag: ['CSS'],
		term: 'CSS Opacity',
	},
	{
		definition: 'Hook لتخصيص القيم المكشوفة عند استخدام ref مع Component.',
		id: '74',
		tag: ['React'],
		term: 'React useImperativeHandle',
	},
	{
		definition:
			'تحسين الأداء عبر السماح بتوقف وإعادة تشغيل rendering بطريقة أكثر فعالية.',
		id: '75',
		tag: ['React'],
		term: 'React Concurrent Mode',
	},
	{
		definition: 'نوع بيانات فريد وغير قابل للتكرار يُستخدم كـ key للـ Object.',
		id: '76',
		tag: ['JS'],
		term: 'JavaScript Symbol',
	},
	{
		definition:
			'نوع من Map حيث تكون المفاتيح كائنات ويتم التخلص منها تلقائيًا عند عدم استخدامها.',
		id: '77',
		tag: ['JS'],
		term: 'JavaScript WeakMap',
	},
	{
		definition: 'نوع من Set يخزن كائنات فقط ويُمسح تلقائيًا عند عدم استخدامها.',
		id: '78',
		tag: ['JS'],
		term: 'JavaScript WeakSet',
	},
	{
		definition:
			'طريقة لإنشاء Strings مع دعم التعبيرات والمتغيرات باستخدام backticks.',
		id: '79',
		tag: ['JS'],
		term: 'JavaScript Template Literals',
	},
	{
		definition: 'تغيير شكل أو حجم العنصر مثل translate, rotate, scale.',
		id: '80',
		tag: ['CSS'],
		term: 'CSS Transforms',
	},
	{
		definition: 'تحديد متى يمكن الوصول لقيم CSS Variables حسب العنصر والحاوية.',
		id: '81',
		tag: ['CSS'],
		term: 'CSS Variables Scope',
	},
	{
		definition: 'أداة لتحليل أداء المكونات في React.',
		id: '82',
		tag: ['React'],
		term: 'React Profiler',
	},
	{
		definition: 'عملية ربط مخرجات SSR مع أحداث React على العميل.',
		id: '83',
		tag: ['React'],
		term: 'React Hydration',
	},
	{
		definition:
			'Incremental Static Regeneration لتحديث صفحات static بشكل جزئي بعد النشر.',
		id: '84',
		tag: ['Next'],
		term: 'Next.js ISR',
	},
	{
		definition: 'إنشاء صفحات ديناميكية تعتمد على متغيرات URL.',
		id: '85',
		tag: ['Next'],
		term: 'Next.js Dynamic Routing',
	},
	{
		definition: 'تطبيق وظائف وسيطة على طلبات API قبل الوصول للـ Handler.',
		id: '86',
		tag: ['Next'],
		term: 'Next.js API Middleware',
	},
	{
		definition: 'مكتبة لاختبار React Components بطريقة تحاكي تفاعل المستخدم.',
		id: '87',
		tag: ['Testing'],
		term: 'Testing Library',
	},
	{
		definition: 'مكتبة اختبار JavaScript لدعم Unit وIntegration Testing.',
		id: '88',
		tag: ['Testing'],
		term: 'Jest',
	},
	{
		definition: 'اختبارات شاملة للتحقق من عمل التطبيق من البداية للنهاية.',
		id: '89',
		tag: ['Testing'],
		term: 'End-to-End Testing',
	},
	{
		definition: 'إنشاء بيانات أو وظائف وهمية لاختبار المكونات أو الدوال.',
		id: '90',
		tag: ['Testing'],
		term: 'Mocking',
	},
	{
		definition: 'تحريك العناصر إلى اليمين أو اليسار داخل الحاوية.',
		id: '91',
		tag: ['CSS'],
		term: 'CSS Float',
	},
	{
		definition: 'منع العناصر من الالتفاف حول عنصر Float.',
		id: '92',
		tag: ['CSS'],
		term: 'CSS Clear',
	},
	{
		definition:
			'آلية تسمح بتنفيذ الأكواد غير المتزامنة وإدارة Call Stack وCallback Queue.',
		id: '93',
		tag: ['JS'],
		term: 'JavaScript Event Loop',
	},
	{
		definition: 'هيكل بيانات يحدد ترتيب تنفيذ الدوال في البرنامج.',
		id: '94',
		tag: ['JS'],
		term: 'JavaScript Call Stack',
	},
	{
		definition: 'واجهات برمجية يقدمها المتصفح لتسهيل العمليات مثل DOM وFetch.',
		id: '95',
		tag: ['JS'],
		term: 'JavaScript Web API',
	},
	{
		definition:
			'تحذيرات تظهر في وضع التطوير لتنبيه المطور على المشاكل المحتملة.',
		id: '96',
		tag: ['React'],
		term: 'React Strict Mode Warnings',
	},
	{
		definition:
			'مكون يتم التحكم في قيمته بواسطة state ويتم تحديثه من خلال onChange.',
		id: '97',
		tag: ['React'],
		term: 'React Controlled Component',
	},
	{
		definition: 'مكون يدير حالته داخليًا بدون ربطه بالـ state الخارجي.',
		id: '98',
		tag: ['React'],
		term: 'React Uncontrolled Component',
	},
	{
		definition: 'تمرير ref من مكون أب إلى عنصر DOM داخل مكون فرعي.',
		id: '99',
		tag: ['React'],
		term: 'React Refs Forwarding',
	},
	{
		definition:
			'ملف JS يحتوي على وظائف أو متغيرات يمكن استيرادها أو تصديرها بين الملفات.',
		id: '100',
		tag: ['JS'],
		term: 'JavaScript Module',
	},
	{
		definition:
			'رفع تعريف الدوال إلى أعلى نطاقها بحيث يمكن استدعاؤها قبل تعريفها.',
		id: '101',
		tag: ['JS'],
		term: 'JavaScript Hoisting Function',
	},
	{
		definition:
			'رفع تعريف المتغيرات باستخدام var إلى أعلى نطاقها، مع قيمتها undefined في البداية.',
		id: '102',
		tag: ['JS'],
		term: 'JavaScript Hoisting Variable',
	},
	{
		definition: 'تحديد طريقة حساب أبعاد العنصر: content-box أو border-box.',
		id: '103',
		tag: ['CSS'],
		term: 'CSS Box-sizing',
	},
	{
		definition: 'يجعل العنصر ثابتًا ضمن الحاوية أثناء التمرير حتى حد معين.',
		id: '104',
		tag: ['CSS'],
		term: 'CSS Position Sticky',
	},
	{
		definition: 'كائن يتيح التحكم في العمليات على كائن آخر مثل get وset.',
		id: '105',
		tag: ['JS'],
		term: 'JavaScript Proxy',
	},
	{
		definition:
			'كائن يوفر دوال للوصول والتحكم بالخصائص على كائنات JS بطريقة قياسية.',
		id: '106',
		tag: ['JS'],
		term: 'JavaScript Reflect',
	},
	{
		definition: 'Hook يعمل بعد تحديث DOM وقبل الرسم، مفيد لقياس العناصر.',
		id: '107',
		tag: ['React'],
		term: 'React useLayoutEffect',
	},
	{
		definition: 'Hook لعرض معلومات عن hook مخصص في React DevTools.',
		id: '108',
		tag: ['React'],
		term: 'React useDebugValue',
	},
	{
		definition: 'نظام جديد لإدارة routes في Next.js 13+ باستخدام مجلد app.',
		id: '109',
		tag: ['Next'],
		term: 'Next.js App Router',
	},
	{
		definition: 'مكون يُنفذ على السيرفر لتقليل حجم الجافاسكريبت المرسل للعميل.',
		id: '110',
		tag: ['Next'],
		term: 'Next.js Server Component',
	},
	{
		definition: 'مكون يُنفذ على العميل ويستفيد من الـ state وhooks.',
		id: '111',
		tag: ['Next'],
		term: 'Next.js Client Component',
	},
	{
		definition: 'مرجع ضعيف لكائن يسمح بتحريره من الذاكرة عند الحاجة.',
		id: '112',
		tag: ['JS'],
		term: 'JavaScript WeakRef',
	},
	{
		definition: 'واجهة لإجراء عمليات التهيئة الدولية مثل الأرقام والتواريخ.',
		id: '113',
		tag: ['JS'],
		term: 'JavaScript Intl API',
	},
	{
		definition: 'طريقة لتقسيم الشبكة إلى مناطق مسماة لتسهيل ترتيب العناصر.',
		id: '114',
		tag: ['CSS'],
		term: 'CSS Grid Template Areas',
	},
	{
		definition:
			'تحديد كيفية ملء الصورة أو الفيديو داخل العنصر مع الحفاظ على النسبة.',
		id: '115',
		tag: ['CSS'],
		term: 'CSS Object-fit',
	},
	{
		definition: 'مكون يوفر قيمة context لجميع المكونات الفرعية.',
		id: '116',
		tag: ['React'],
		term: 'React Context Provider',
	},
	{
		definition: 'مكون أو hook يستهلك القيمة المتوفرة من Context Provider.',
		id: '117',
		tag: ['React'],
		term: 'React Context Consumer',
	},
	{
		definition:
			'دالة يمكن إيقافها واستئنافها باستخدام yield لتوليد قيم متتابعة.',
		id: '118',
		tag: ['JS'],
		term: 'JavaScript Generator',
	},
	{
		definition:
			'Generator يدعم العمليات غير المتزامنة باستخدام async/await وyield.',
		id: '119',
		tag: ['JS'],
		term: 'JavaScript Async Generator',
	},
	{
		definition:
			'الوصول للخصائص بشكل آمن حتى لو كان بعض الكائنات undefined أو null.',
		id: '120',
		tag: ['JS'],
		term: 'JavaScript Optional Chaining',
	},
	{
		definition:
			'تعيين قيمة افتراضية إذا كانت القيمة null أو undefined باستخدام ??',
		id: '121',
		tag: ['JS'],
		term: 'JavaScript Nullish Coalescing',
	},
	{
		definition:
			'نوع بيانات لتمثيل أعداد صحيحة كبيرة جدًا تتجاوز الحد الأقصى للـ Number.',
		id: '122',
		tag: ['JS'],
		term: 'JavaScript BigInt',
	},
	{
		definition:
			'Hook لإدارة تحديثات واجهة المستخدم بشكل غير متزامن لتجنب التهنيج.',
		id: '123',
		tag: ['React'],
		term: 'React useTransition',
	},
	{
		definition: 'Hook لتأجيل القيمة لتقليل إعادة الرندر المكثف.',
		id: '124',
		tag: ['React'],
		term: 'React useDeferredValue',
	},
	{
		definition: 'دوال تُنفذ على السيرفر مباشرة في Next.js 13+ App Router.',
		id: '125',
		tag: ['React', 'Next'],
		term: 'React Server Actions',
	},
	{
		definition:
			'مقارنة بين طريقتي تمرير الأحداث: من أعلى DOM للأسفل (capturing) ومن الأسفل للأعلى (bubbling).',
		id: '126',
		tag: ['JS'],
		term: 'JavaScript Event Capturing vs Bubbling',
	},
	{
		definition: 'تحديد نقاط توقف للعناصر عند التمرير للحصول على تجربة سلسة.',
		id: '127',
		tag: ['CSS'],
		term: 'CSS Scroll Snap',
	},
	{
		definition: 'تطبيق تأثيرات على الصور أو العناصر مثل blur وbrightness.',
		id: '128',
		tag: ['CSS'],
		term: 'CSS Filter',
	},
	{
		definition: 'تطبيق تأثيرات على خلفية العناصر لتأثيرات شفافة أو ضبابية.',
		id: '129',
		tag: ['CSS'],
		term: 'CSS Backdrop-filter',
	},
	{
		definition: 'آلية لاستيراد وتصدير وظائف وبيانات بين ملفات JS مختلفة.',
		id: '130',
		tag: ['JS'],
		term: 'JavaScript Import/Export',
	},
	{
		definition: 'استيراد Modules بشكل ديناميكي عند الحاجة باستخدام import().',
		id: '131',
		tag: ['JS'],
		term: 'JavaScript Dynamic Import',
	},
	{
		definition:
			'استمرار وجود مراجع لكائنات لم تعد مطلوبة مما يؤدي لزيادة استهلاك الذاكرة.',
		id: '132',
		tag: ['JS'],
		term: 'JavaScript Memory Leak',
	},
	{
		definition: 'ميزة في التطوير لإعادة Render المكونات مرتين لاكتشاف المشاكل.',
		id: '133',
		tag: ['React'],
		term: 'React Strict Mode Double Render',
	},
	{
		definition:
			'قواعد استخدام الـ Hooks: فقط في Functional Components وعلى المستوى الأعلى.',
		id: '134',
		tag: ['React'],
		term: 'React Hook Rules',
	},
	{
		definition:
			'دمج Lazy Loading مع Suspense لتأجيل تحميل Components وعرض fallback UI.',
		id: '135',
		tag: ['React'],
		term: 'React Lazy + Suspense',
	},
	{
		definition: 'عنصر لإضافة metadata مثل title وmeta tags في صفحات Next.js.',
		id: '136',
		tag: ['Next'],
		term: 'Next.js Head',
	},
	{
		definition: 'تحميل الصفحة المستهدفة مسبقًا لتسريع التنقل.',
		id: '137',
		tag: ['Next'],
		term: 'Next.js Link prefetch',
	},
	{
		definition:
			'تأجيل تنفيذ دالة حتى انتهاء فترة معينة لتقليل عدد الاستدعاءات.',
		id: '138',
		tag: ['JS'],
		term: 'JavaScript Debounce',
	},
	{
		definition:
			'تحديد عدد مرات تنفيذ الدالة خلال فترة زمنية معينة لتقليل الحمل.',
		id: '139',
		tag: ['JS'],
		term: 'JavaScript Throttle',
	},
	{
		definition: 'تمرير ref من الأب إلى مكون فرعي مع تحديد النوع في TS.',
		id: '140',
		tag: ['React', 'TS'],
		term: 'React ForwardRef with TypeScript',
	},
	{
		definition: 'Hook لإنشاء id فريد لكل مكون لتجنب التعارض عند SSR.',
		id: '141',
		tag: ['React'],
		term: 'React useId',
	},
	{
		definition: 'إدارة الأخطاء باستخدام try/catch/finally.',
		id: '142',
		tag: ['JS'],
		term: 'JavaScript Error Handling',
	},
	{
		definition: 'إنشاء فئة Error مخصصة لتمثيل أنواع أخطاء محددة.',
		id: '143',
		tag: ['JS'],
		term: 'JavaScript Custom Error',
	},
	{
		definition: 'تحديد ما إذا كان العنصر يستجيب للأحداث مثل click وhover.',
		id: '144',
		tag: ['CSS'],
		term: 'CSS Pointer-events',
	},
	{
		definition:
			'تحديد موقع محتوى العنصر داخل العنصر نفسه مثل الصور أو الفيديو.',
		id: '145',
		tag: ['CSS'],
		term: 'CSS Object-position',
	},
	{
		definition: 'تحديد نسبة العرض إلى الارتفاع للعنصر لضمان أبعاد ثابتة.',
		id: '146',
		tag: ['CSS'],
		term: 'CSS Aspect-ratio',
	},
	{
		definition:
			'ميزات لتحسين الأداء عبر جدولة تحديثات واجهة المستخدم بطريقة غير متزامنة.',
		id: '147',
		tag: ['React'],
		term: 'React Concurrent Features',
	},
	{
		definition:
			'حالة تحدث عند اختلاف محتوى HTML الناتج من SSR عن محتوى React على العميل.',
		id: '148',
		tag: ['React', 'Next'],
		term: 'React Hydration Mismatch',
	},
	{
		definition: 'إعادة توجيه المستخدم إلى route آخر بشكل دائم أو مؤقت.',
		id: '149',
		tag: ['Next'],
		term: 'Next.js Redirects',
	},
	{
		definition:
			'إعادة كتابة عنوان URL داخليًا دون تغيير الرابط الظاهر للمستخدم.',
		id: '150',
		tag: ['Next'],
		term: 'Next.js Rewrite',
	},
];
