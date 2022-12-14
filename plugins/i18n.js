export default function (ctx) {
    // onBeforeLanguageSwitch called right before setting a new locale
    // app.i18n.onBeforeLanguageSwitch = (oldLocale, newLocale, isInitialSetup, context) => {
    //     console.log(oldLocale, newLocale, isInitialSetup)
    // }
    // onLanguageSwitched called right after a new locale has been set
    ctx.app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {

        ctx.$mitt.emit('languageSwitched', [newLocale, oldLocale])
    }
}