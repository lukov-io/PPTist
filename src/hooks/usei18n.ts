import {useI18n} from 'vue-i18n'
export default () => {
  const { t, locale, availableLocales } = useI18n({
    inheritLocale: true,
    useScope: 'global'
  })
  return { t, locale, availableLocales }
}
