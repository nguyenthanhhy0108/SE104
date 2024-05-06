async function getAllParts() {
    try {
        const response = await $.ajax({
            url: '/get-all-parts',
            method: 'GET',
            dataType: 'json'
        });
        $('#response').html(response);
        return response;
    } catch (error) {
        console.error('Error:', error);
        throw new Error('Error: ' + error);
    }
}

getAllParts().then(parts => {
    console.log(parts);
    console.log(parts[0])
}).catch(error => {
    console.error('Error:', error);
});
