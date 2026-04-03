import { Shadows } from "@/constants/Shadows"
import { useThemeColors } from "@/hooks/useThemeColors"
import { ListFilterIcon } from "lucide-react-native"
import { useRef, useState } from "react"
import { Dimensions, Modal, Pressable, StyleSheet, View } from "react-native"
import { Card } from "./Card"
import { RadioInput } from "./RadioInput"
import { Row } from "./Row"
import { ThemedText } from "./ThemedText"

type FilterButtonProps = {
    value: 'id' | 'name',
    onChange: (value: 'id' | 'name') => void
}

export function FilterButton({ value, onChange }: FilterButtonProps) {
    const colors = useThemeColors()
    const filterBtnRef = useRef<View>(null)
    const [modalVisible, setModalVisible] = useState(false)
    const [position, setPosition] = useState<null | { top: number, right: number }>(null)
    const onBtnPress = () => {
        filterBtnRef?.current?.measureInWindow((x, y, width, height) => {
            setPosition({
                top: y + height + 10,
                right: Dimensions.get('window').width - (x + width)
            })
            setModalVisible(true)
        })
    }
    const onClose = () => setModalVisible(false)

    const options = [
        { label: 'Number', value: 'id' },
        { label: 'Name', value: 'name' }
    ] as const

    return (<>
        <Pressable onPress={onBtnPress} ref={filterBtnRef}>
            <View style={[styles.filterButton, { backgroundColor: colors.grayWhite }]}>
                <ListFilterIcon
                    opacity={0.7}
                    color={colors.tint}
                    size={16}
                />
            </View>
        </Pressable>
        <Modal
            animationType="fade"
            transparent
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <Pressable style={styles.modalOverlay} onPress={onClose} />
            <View style={[styles.popup, { backgroundColor: colors.tint, ...position }]}>
                <ThemedText style={styles.popupTitle} variant="subtitle2" color="grayWhite">
                    Sort by
                </ThemedText>
                <Card style={styles.popupCard}>
                    {options.map((o) => (<Pressable key={o.value} onPress={() => onChange(o.value)}>
                        <Row style={styles.popupRow}>
                            <RadioInput checked={value === o.value} />
                            <ThemedText>
                                {o.label}
                            </ThemedText>
                        </Row>
                    </Pressable>))}
                </Card>
            </View>
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
    },
    popup: {
        position: 'absolute',
        width: 113,
        padding: 4,
        paddingTop: 16,
        gap: 16,
        borderRadius: 12,
        ...Shadows.dp2
    },
    popupTitle: {
        paddingLeft: 20,
    },
    popupCard: {
        gap: 16,
        paddingVertical: 16,
        paddingHorizontal: 20
    },
    popupRow: {
        gap: 8
    }
})