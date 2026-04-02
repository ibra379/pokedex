import { useThemeColors } from "@/hooks/useThemeColors"
import { ListFilterIcon } from "lucide-react-native"
import { useState } from "react"
import { Modal, Pressable, StyleSheet, Text, View } from "react-native"

type FilterButtonProps = {
    value: 'id' | 'name',
    onChange: (value: 'id' | 'name') => void
}

export function FilterButton({ value, onChange }: FilterButtonProps) {
    const colors = useThemeColors()
    const [modalVisible, setModalVisible] = useState(false)
    const onBtnPress = () => setModalVisible(true)
    const onClose = () => setModalVisible(false)

    return (<>
        <Pressable onPress={onBtnPress}>
            <View style={[styles.filterButton, { backgroundColor: colors.grayWhite }]}>
                <ListFilterIcon
                    opacity={0.7}
                    color={colors.tint}
                    size={16}
                />
            </View>
        </Pressable>
        <Modal
            transparent
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <Pressable style={styles.modalOverlay} onPress={onClose} />
            <Text>Filter Options</Text>
        </Modal>
    </>)
}

const styles = StyleSheet.create({
    filterButton: {
        flex: 0,
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 32
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
})