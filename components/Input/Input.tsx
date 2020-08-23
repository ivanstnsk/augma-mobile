import * as React from 'react';
import { StyleSheet, View, Text, TextInput, TextInputProps } from 'react-native';

type Props = {
  placeholder: string;
  valid?: boolean;
  infoLabel?: string;
  error?: string;
  onPress?: () => void;
} & TextInputProps;

export const Input: React.FC<Props> = ({
  placeholder,
  valid = true,
  infoLabel,
  error,
  onPress,
  ...props
}) => {
  const inputRef: React.RefObject<TextInput> = React.useRef<TextInput>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const wrapperStyles = !valid
  ? [ styles.wrapper, styles.wrapperError ]
  : styles.wrapper;

  const infoLabelStyles = !valid
  ? [ styles.label, styles.labelError ]
  : styles.label;

  return (
    <View
      style={wrapperStyles}
      onTouchStart={handleFocus}
    >
      <View style={styles.infoContainer}>
        <Text style={infoLabelStyles}>{placeholder}</Text>
        <Text style={infoLabelStyles}>{valid ? infoLabel : error}</Text>
      </View>
      <TextInput
        style={styles.input}
        {...props}
        ref={inputRef}
        onFocus={handleFocus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 58,
    backgroundColor: '#393939',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  wrapperError: {
    borderWidth: 1,
    borderColor: '#D12727',
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#919191',
  },
  labelError: {
    color: '#D12727',
  },
  input: {
    width: '100%',
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
});