// @flow
import * as React from 'react'
import * as I from 'immutable'
import {Meta, Text} from '../../../../common-adapters'
import {globalColors, platformStyles, styleSheetCreate} from '../../../../styles'
import {formatDurationShort} from '../../../../util/timestamp'

export const ExplodingMeta = ({
  explodingModeSeconds,
  isNew,
}: {
  explodingModeSeconds: number,
  isNew: boolean,
}) => {
  if (explodingModeSeconds === 0 && !isNew) {
    // nothing to show
    return null
  }
  return (
    <Meta
      backgroundColor={explodingModeSeconds === 0 ? globalColors.blue : globalColors.black_75_on_white}
      noUppercase={explodingModeSeconds !== 0}
      style={styles.newBadge}
      size="Small"
      title={explodingModeSeconds === 0 ? 'New' : formatDurationShort(explodingModeSeconds * 1000)}
    />
  )
}

export const isTyping = (typing: I.Set<string>) => {
  switch (typing.size) {
    case 0:
      return ''
    case 1:
      return [
        <Text key={0} type="BodySmallSemibold">
          {typing.first()}
        </Text>,
        ` is typing`,
      ]
    case 2:
      return [
        <Text key={0} type="BodySmallSemibold">
          {typing.first()}
        </Text>,
        ` and `,
        <Text key={1} type="BodySmallSemibold">
          {typing.skip(1).first()}
        </Text>,
        ` are typing`,
      ]
    default:
      return [
        <Text key={0} type="BodySmallSemibold">
          {typing.join(', ')}
        </Text>,
        ` are typing`,
      ]
  }
}

const styles = styleSheetCreate({
  newBadge: platformStyles({
    common: {
      borderColor: globalColors.white,
      borderRadius: 3,
      borderStyle: 'solid',
      paddingBottom: 1,
      paddingTop: 1,
    },
    isElectron: {
      borderWidth: 1,
      cursor: 'pointer',
      marginLeft: -11,
      marginTop: -6,
    },
    isMobile: {
      borderWidth: 2,
      marginLeft: -5,
      marginTop: -1,
      height: 18,
    },
  }),
})
