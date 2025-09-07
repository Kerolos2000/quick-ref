import createCache, { EmotionCache } from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export function createEmotionCache(): EmotionCache {
	const stylisPlugins = [prefixer];

	stylisPlugins.push(rtlPlugin);
	return createCache({ key: `css-rtl`, prepend: true, stylisPlugins });
}
