export function downloadCartAsCsv(cart) {
  if (cart.length === 0) return;

  let csvContent = 'Item Name,Quantity,Unit Price,Total Price\n';
  let grandTotal = 0;

  cart.forEach((item) => {
    const lineTotal = item.price * item.quantity;
    grandTotal += lineTotal;
    csvContent += `"${item.name}",${item.quantity},₱${item.price},₱${lineTotal}\n`;
  });

  csvContent += `\nGrand Total,,,₱${grandTotal}`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `McDonald_Order_${new Date().toISOString().slice(0, 10)}.csv`;
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
