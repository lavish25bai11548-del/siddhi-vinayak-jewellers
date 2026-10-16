/**
 * WhatsApp Helper Utilities
 * Generates pre-filled WhatsApp click-to-chat links for products,
 * general enquiries, and appointments.
 */

export const generateWhatsAppLink = (phoneNumber, message) => {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
};

export const createProductEnquiryMessage = (product, storeName = "Siddhi Vinayak Jewellers") => {
  return `Namaste ${storeName}! 🙏\n\nI am interested in enquiring about:\n*${product.name}*\nCategory: ${product.category}\nPurity: ${product.purity || 'Hallmarked'}\n\nPlease share more details, price estimates, and photos of this piece. Thank you!`;
};

export const createGeneralEnquiryMessage = ({ name, phone, message, interest = "Jewellery Enquiry" }) => {
  return `Namaste Siddhi Vinayak Jewellers! 🙏\n\n*Customer Enquiry*\nName: ${name || 'Valued Customer'}\nPhone: ${phone || 'N/A'}\nInterest: ${interest}\n\nMessage: ${message || 'I would like to enquire about jewellery at your Koshithal showroom.'}\n\nPlease get in touch with me.`;
};

export const createGoldRateEnquiryMessage = (weight, metal, estimatedPrice) => {
  return `Namaste Siddhi Vinayak Jewellers! 🙏\n\nI calculated an estimate on your website:\nMetal: ${metal}\nWeight: ${weight} grams\nEstimated Value: ${estimatedPrice}\n\nPlease share the latest showroom rate and making charges. Thank you!`;
};
