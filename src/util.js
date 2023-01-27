export function openInNewTab(url) {
    if(url == null) {
        return
    }

    window.open(url, '_blank').focus()
}