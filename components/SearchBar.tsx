import { useThemeColors } from '@/hooks/useThemeColors';
import { SearchIcon } from 'lucide-react-native';
import { StyleSheet, TextInput } from "react-native";
import { Row } from './Row';

type SearchProps = {
    value: string,
    onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchProps) {
    const colors = useThemeColors()

    return (
        <Row style={[styles.wrapper, { backgroundColor: colors.grayWhite }]}>
            <SearchIcon opacity={0.7} color={colors.tint} size={24} style={styles.searchIcon} />
            <TextInput
                style={[styles.textInput]}
                value={value}
                onChangeText={onChange}
                placeholder="Search..."
                placeholderTextColor={colors.grayMedium}
            />
        </Row>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'relative',
        gap: 12,
        borderRadius: 16,
        height: 32,
    },
    searchIcon: {
        position: 'absolute',
        left: 8,
        zIndex: 1
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        width: '100%',
        paddingHorizontal: 40
    }
})