"use client";

export default function LocalBusinessSEO({ url, phone, image, sameAs = [] }) {
  const locations = [
    {
      name: "Techno Cool Associates – Motijheel Office",
      street: "Motijheel Commercial Area",
      city: "Dhaka",
      postalCode: "1000",
      country: "BD",
      lat: "23.7294",
      lng: "90.4125",
    },
    {
      name: "Techno Cool Associates – Gulshan Branch",
      street: "Gulshan-2",
      city: "Dhaka",
      postalCode: "1212",
      country: "BD",
      lat: "23.7925",
      lng: "90.4078",
    },
    {
      name: "Techno Cool Associates – Narayanganj Site",
      street: "Narayanganj Industrial Zone",
      city: "Narayanganj",
      postalCode: "1400",
      country: "BD",
      lat: "23.6238",
      lng: "90.5000",
    },
  ];

  return (
    <>
      {locations.map((loc, index) => {
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: loc.name,
          image: image.startsWith("http") ? image : `${url}${image}`,
          "@id": url,
          url,
          telephone: phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.street,
            addressLocality: loc.city,
            postalCode: loc.postalCode,
            addressCountry: loc.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.lat,
            longitude: loc.lng,
          },
          openingHours: "Mo-Su 09:00-18:00",
          sameAs,
        };

        return (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        );
      })}
    </>
  );
}
