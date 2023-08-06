$(document).ready(function () {
    let checkedAmenities = {};

    $('input[type="checkbox"]').change(function () {
        // Retrieve the Amenity ID and Name from the data attributes
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if (this.checked) {
            checkedAmenities[amenityId] = amenityName;
        } else {
            delete checkedAmenities[amenityId];
        }

        const amenitiesList = Object.values(checkedAmenities).join(', ');
        $('.Amenities ul').html(`<li>${amenitiesList}</li>`);
    });
});
