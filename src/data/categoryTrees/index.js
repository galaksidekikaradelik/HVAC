import { COMPRESSOR_GROUPS } from './compressors'
import { REFRIGERATION_GROUPS } from './refrigeration'
import { ELECTRICAL_GROUPS } from './electrical'
import { FANS_MOTORS_GROUPS } from './fansMotors'
import { SENSORS_AUTOMATION_GROUPS } from './sensorsAutomation'
import { HEAT_EXCHANGERS_GROUPS } from './heatExchangers'

export const CATEGORY_TREES = {
  kompressorlar: COMPRESSOR_GROUPS,

  'soyuducu-kontur-komponentleri':
    REFRIGERATION_GROUPS,

  'elektron-kartlar-elektrik-hisseleri':
    ELECTRICAL_GROUPS,

  'fanlar-ve-muherrikler':
    FANS_MOTORS_GROUPS,

  'sensorlar-ve-avtomatika':
    SENSORS_AUTOMATION_GROUPS,

  'istilik-mubadile-aparatlari':
    HEAT_EXCHANGERS_GROUPS,
}

export function getCategoryGroups(categorySlug) {
  return CATEGORY_TREES[categorySlug] ?? []
}

export function getCategoryGroup(categorySlug, groupSlug) {
  return getCategoryGroups(categorySlug).find(
    (group) => group.slug === groupSlug
  )
}

export function getCategoryChild(
  categorySlug,
  groupSlug,
  childSlug
) {
  return getCategoryGroup(categorySlug, groupSlug)
    ?.children?.find(
      (child) => child.slug === childSlug
    )
}