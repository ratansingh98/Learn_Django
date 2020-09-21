var hiddenClass = "hidden";
var shownClass = 'unhidden';

function petSectionHover() {
    console.log("Hello world 1!");
    var children = this.children;
    console.log(children);
    for(var i = 0; i < children.length; i++) {
        var child = children[i];
        
        if (child.className === hiddenClass) {
            child.className = shownClass;
        }
    }
    
}

function petSectionEndHover() {
    var children = this.children;
    for(var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.className === shownClass) {
            child.className = hiddenClass;
        }
    }
}

(function() {
    console.log("Hello world!");
    var petSections = document.getElementsByClassName('petname');
    for(var i = 0; i < petSections.length; i++) {
        petSections[i].addEventListener('mouseover', petSectionHover);
        petSections[i].addEventListener('mouseout', petSectionEndHover);
    }
}());
