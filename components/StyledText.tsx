import { TextProps } from "@/types";
import {Text} from '@/components'

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
