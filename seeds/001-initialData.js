// This grows our BataBase
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 12365487254632541, make: 'Honda', model: 'Accord', mileage: '', transmission: 'Auto', status: 'Clean'},
        {vin: 12365487254632541, make: 'Chevy', model: 'Silverado', mileage: '', transmission: 'Auto', status: 'Clean'},
        {vin: 12365487254632541, make: 'Ford', model: 'Raptor', mileage: '', transmission: 'Manual', status: 'Clean'},
        {vin: 12365487254632541, make: 'Tesla', model: 'Model S', mileage: '', transmission: 'Manual', status: 'Clean'},
      ]);
    });
};
