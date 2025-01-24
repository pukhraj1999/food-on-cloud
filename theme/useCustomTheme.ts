import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { themeColor } from '.';

export default function useCustomTheme() {
    const selectedTheme = useSelector((state: RootState) => state.restaurentReducer.selectedTheme);
    return {
        ...themeColor,
        text: selectedTheme?.textColorOption,
        bgColor: (opacity: string) => `rgba(${selectedTheme?.bgColorOption},${opacity})`,
    };
}
