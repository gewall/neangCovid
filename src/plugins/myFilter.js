import Vue from 'vue';

Vue.filter('numRep', function (value) {
        if (typeof value !== "number") {
            return value;
        }
        let formatter = new Intl.NumberFormat('de-DE');
        return formatter.format(value);
    });
