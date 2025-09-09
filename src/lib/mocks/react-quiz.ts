import { Quiz } from 'src/types';

export const reactQuiz: Quiz[] = [
	{
		answer: 'مكتبة JavaScript لبناء الواجهات',
		level: 'junior',
		options: [
			'مكتبة JavaScript لبناء الواجهات',
			'Framework كامل زي Angular',
			'Database Engine',
			'لغة برمجة جديدة',
		],
		term: 'إيه هو React؟',
	},
	{
		answer: 'يكتب HTML جوه JavaScript',
		level: 'mid',
		options: [
			'يخلي JavaScript يتعامل مع SQL',
			'يكتب HTML جوه JavaScript',
			'يحول CSS لـ JavaScript',
			'يستخدم TypeScript بدل JavaScript',
		],
		term: 'إيه الغرض من الـ JSX؟',
	},
	{
		answer: 'Functional Components أبسط و مبنية على functions',
		level: 'senior',
		options: [
			'Functional Components أبسط و مبنية على functions',
			'Class Components أسرع دايمًا',
			'Functional Components مش بتدعم props',
			'Class Components مش بتدعم state',
		],
		term: 'إيه الفرق بين class component و functional component؟',
	},
	{
		answer: 'نسخة خفيفة من DOM الحقيقي بيعمل بيها React التحديثات',
		level: 'junior',
		options: [
			'نسخة خفيفة من DOM الحقيقي بيعمل بيها React التحديثات',
			'Database جديدة',
			'Storage للـ state',
			'API للتعامل مع المتصفح',
		],
		term: 'هو إيه ال Virtual DOM؟',
	},
	{
		answer: 'بيخزن و يحدث state جوا component',
		level: 'mid',
		options: [
			'بيخزن و يحدث state جوا component',
			'بيجيب بيانات من API',
			'بيعمل navigation',
			'بيعمل render للـ component',
		],
		term: 'useState hook بيعمل إيه؟',
	},
	{
		answer: 'تنفيذ side effects زي API calls',
		level: 'mid',
		options: [
			'تنفيذ side effects زي API calls',
			'تعريف متغير جديد',
			'رسم UI على الشاشة',
			'استخدام CSS',
		],
		term: 'إيه الغرض من useEffect hook؟',
	},
	{
		answer: 'لما تمرر props من component للأحفاد بشكل متكرر',
		level: 'senior',
		options: [
			'لما تمرر props من component للأحفاد بشكل متكرر',
			'إنك تستخدم Redux',
			'تغيير state جوه نفس component',
			'إضافة event listener',
		],
		term: 'إيه هو prop drilling؟',
	},
	{
		answer: 'Props بتيجي من برة و State بيتغير من جوة component',
		level: 'junior',
		options: [
			'Props بتيجي من برة و State بيتغير من جوة component',
			'State ثابتة و Props متغيرة',
			'الاتنين زي بعض',
			'State بتشتغل بس مع Class Components',
		],
		term: 'إيه الفرق بين state و props؟',
	},
	{
		answer: 'بتميز العناصر في القوائم عشان React يعرف يعمل re-render بكفاءة',
		level: 'mid',
		options: [
			'بتميز العناصر في القوائم عشان React يعرف يعمل re-render بكفاءة',
			'تخزن الـ state',
			'تستخدم للتشفير',
			'تنادي على API',
		],
		term: 'إيه الفايدة من React keys؟',
	},
	{
		answer: 'طريقة لإدارة state ومشاركتها بين Components من غير Prop Drilling',
		level: 'senior',
		options: [
			'طريقة لإدارة state ومشاركتها بين Components من غير Prop Drilling',
			'API لجلب البيانات من السيرفر',
			'بديل للـ useState',
			'طريقة لتصميم UI',
		],
		term: 'إيه هو Context API؟',
	},
];
