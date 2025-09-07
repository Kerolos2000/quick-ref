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
			'رفع التصريحات فوق قبل التنفيذ',
			'تجميع الكود في فايل واحد',
			'استخدام فانكشن بدون اسم',
		],
		term: 'Hoisting',
	},
	{
		answer: 'فانكشن شايلة معاها المتغيرات من البيئة الأصلية',
		options: [
			'كود بيتخزن في localStorage',
			'فانكشن شايلة معاها المتغيرات من البيئة الأصلية',
			'نوع جديد من الـ loops',
			'إلغاء event bubbling',
		],
		term: 'Closure',
	},
	{
		answer: 'تحويل نوع البيانات أوتوماتيك',
		options: [
			'تحويل نوع البيانات أوتوماتيك',
			'عمل inheritance بين objects',
			'التعامل مع async code',
			'منع تعديل object',
		],
		term: 'Type Coercion',
	},
	// ... كمل باقي المصطلحات بنفس الفكرة
];
