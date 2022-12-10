function Simplert(type, message) {
    this.type = type;
    this.text = message;
    // Create elements
    let $alertContainer = $('<div>');
    let $alertWrapper = $('<div>');
    let $alert = $('<div>');
    let $headerContainer = $('<div>');
    let $title = $('<p>');
    let $cancel = $('<div>');
    let $svg = $('<img>');
    let $messageContainer = $('<div>');
    let $alertMessage = $('<p>');
    // Add class names
    $alertContainer.addClass('alert-container');    
    $alertWrapper.addClass('alert-wrapper');
    $alert.addClass('alert');
    $headerContainer.addClass('header-container');
    $title.addClass('title');
    $cancel.addClass('cancel');
    $svg.addClass('svg');
    $messageContainer.addClass('message-container');
    $alertMessage.addClass('alert-message');
    // Create alert
    $alertContainer.append($alertWrapper);
    $alertWrapper.append($alert);
    $alert.append($headerContainer);
    $headerContainer.append($title);
    $headerContainer.append($cancel);
    $cancel.append($svg);
    $alert.append($messageContainer);
    $messageContainer.append($alertMessage);
    // Add contents
    $alertMessage.text(message);
    if (type.toLowerCase() === 'error') { /* ERROR */
        $title.text('Oops!');
        $headerContainer.css('background', 'rgba(208, 94, 21, 0.5)');
        $cancel.css('background', 'rgba(255, 87, 87, 0.20)');
    } else if (type.toLowerCase() === 'success') { /* SUCCESS OPTION */
        $title.text('Please note');
        $headerContainer.css('background', 'rgba(208, 94, 21, 0.5)'); /* CHANGES THE COLOUR OF THE HEADING BAR */
        $cancel.css('background', 'rgba(95, 216, 134, 0.20)'); /* CHANGES COLOUR OF THE CANCEL SQUARE */
    } else {
        $title.text('WARNING'); /* WARNING OPTION */
        $headerContainer.css('background', 'rgba(85, 85, 85, 0.25)');
        $cancel.css('background', 'rgba(85, 85, 85, 0.20)');
    }
    this.show = () => {
        // Append alert as first element inside body
        $alertContainer.css('display', 'none');
        $alertContainer.insertBefore(document.body.firstChild);
        $alertContainer.fadeIn(300);
        $cancel.on('click', () => $alertContainer.fadeOut(300, () => $alertContainer.remove()));
    };
}