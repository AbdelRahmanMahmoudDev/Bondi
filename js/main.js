const buttonList = Array.from(document.body.querySelectorAll(".portofolio .list-group-item"))
const itemList = Array.from(document.body.querySelectorAll(".portofolio .item-space"))
const buttonCategory = {
    all: "All",
    design: "Design",
    code: "Code",
    photography: "Photography",
    apps: "Apps"
}
const buttonStates = {
    active: "active",
    colorBlack: "text-black-50",
    colorWhite: "text-white"
}
const displayOptions = {
    block: "d-block",
    none: "d-none"
}
const dataAttribute = "data-attr"
function filterItem(itemList, buttonCategory, dataAttribute) {
    for(const item of itemList) {
        const dataAttributeValue = item.children[0].getAttribute(dataAttribute)
        if(dataAttributeValue.toUpperCase() === buttonCategory.toUpperCase()) {
            item.classList.add(displayOptions.block)
            item.classList.remove(displayOptions.none)
        } else {
            item.classList.add(displayOptions.none)
            item.classList.remove(displayOptions.block) 
        }
    }
}

for(const listItem of buttonList) {
    listItem.onclick = () => {
        for(const activeItem of buttonList) {
            if(activeItem.classList.contains(buttonStates.active)) {
                activeItem.classList.remove(buttonStates.active)
                activeItem.classList.add(buttonStates.colorBlack)
            }
        }
        listItem.classList.add(buttonStates.active)
        listItem.classList.remove(buttonStates.colorBlack)
        listItem.classList.add(buttonStates.colorWhite)

        switch(listItem.innerHTML) {
            case buttonCategory.design:
                filterItem(itemList, buttonCategory.design, dataAttribute)
                break;
            case buttonCategory.code:
                filterItem(itemList, buttonCategory.code, dataAttribute)
                break;
            case buttonCategory.photography:
                filterItem(itemList, buttonCategory.photography, dataAttribute)
                break;
                case buttonCategory.apps:
                filterItem(itemList, buttonCategory.apps, dataAttribute)
                break;
            case buttonCategory.all:
            default: 
                for(const item of itemList) {
                    item.classList.add('d-block');
                    item.classList.remove('d-none');
                }
        }
    }
}