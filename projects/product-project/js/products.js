(function() {

    var products;

    $.ajax("data/product.json")
        .done(function(result, status, request) {
            products = result;
            console.log(products);
            init();
        })
        .fail(function(request, status, error) {
            console.log(status + ": " + error);
        });

    function createProducts(products) {
        var ul = $("#products");

        ul.empty();

        var $lis = _.map(products, function(n) {
            var $li = $("<li>");

            var $thumb = $('<img>')
                .addClass('thumb')
                .attr('src', "img/product/thumbs/" + n.image);
                $li.append($thumb);

            var $features = $('<div>')
                .addClass('features');
                $li.append($features);

            var $descPar = $("<p>").text("Description: " + n.desc);
                $li.append($descPar);
                
            var $specs = $("<p>").text("Specifications: " + n.specs);
                $li.append($specs);
                
            var $color = $("<p>").text("Color: " + n.color);
                $li.append($color);
                
            var $avalColors = $("<p>").text("Available Colors: " + n.availableColors);
                $li.append($avalColors);
                
            var $price = $("<p>").text("Price: " + n.price);
                $li.append($price);


             

            return $li;
        });

        ul.append($lis);
    }

    function filterProducts(searchTerm) {
        var filtered = _.filter(products, function(p) {
            return seachObject(searchTerm, p);
        });
        createProducts(filtered);

        function seachObject(searchTerm, obj) {
            return _.reduce(obj, function(memo, val) {
                if (memo === true) return true;

                if (Array.isArray(val) || typeof val === 'object')
                    return seachObject(searchTerm, val);

                if (typeof val !== 'string') return memo;

                return (val.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
             }, false);
            createProducts(filtered);
    


}
        }



        function init() {
            createProducts(products);

            $('#search').on('keyup', function(e) {
                var term = $(e.target).val();
                
                if (term.length >= 3)
                    filterProducts(term);
                    
                else 
                createProducts(products);
            
            });
            $(".close", "#product" );
    }
})();