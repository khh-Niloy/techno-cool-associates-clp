"use client";

export default function LocalBusinessSEO({ url, phone, image, sameAs = [] }) {
  const locations = [
    // EPZs
    {
      name: "Techno Cool Associates – Dhaka EPZ",
      street: "Uttara Industrial Area",
      city: "Dhaka",
      postalCode: "1230",
      country: "BD",
      lat: "23.8607",
      lng: "90.4001",
    },
    {
      name: "Techno Cool Associates – Chittagong EPZ",
      street: "North Patenga",
      city: "Chittagong",
      postalCode: "4000",
      country: "BD",
      lat: "22.3385",
      lng: "91.7890",
    },
    {
      name: "Techno Cool Associates – Adamjee EPZ",
      street: "Adamjee Industrial Estate",
      city: "Narayanganj",
      postalCode: "1420",
      country: "BD",
      lat: "23.6580",
      lng: "90.4985",
    },
    {
      name: "Techno Cool Associates – Comilla EPZ",
      street: "Comilla Export Processing Zone",
      city: "Comilla",
      postalCode: "3500",
      country: "BD",
      lat: "23.4593",
      lng: "91.1791",
    },
    {
      name: "Techno Cool Associates – Ishwardi EPZ",
      street: "Ishwardi Export Processing Zone",
      city: "Pabna",
      postalCode: "6640",
      country: "BD",
      lat: "24.1000",
      lng: "89.0500",
    },
    {
      name: "Techno Cool Associates – Karnaphuli EPZ",
      street: "Karnaphuli Industrial Zone",
      city: "Chittagong",
      postalCode: "4210",
      country: "BD",
      lat: "22.3500",
      lng: "91.8300",
    },
    {
      name: "Techno Cool Associates – Mongla EPZ",
      street: "Mongla Export Processing Zone",
      city: "Bagerhat",
      postalCode: "9300",
      country: "BD",
      lat: "22.6554",
      lng: "89.7341",
    },
    // Commercial Zones
    {
      name: "Techno Cool Associates – Banani Commercial Zone",
      street: "Banani",
      city: "Dhaka",
      postalCode: "1213",
      country: "BD",
      lat: "23.7893",
      lng: "90.4089",
    },
    {
      name: "Techno Cool Associates – Tejgaon Industrial Area",
      street: "Tejgaon Industrial Area",
      city: "Dhaka",
      postalCode: "1208",
      country: "BD",
      lat: "23.7506",
      lng: "90.4095",
    },
    {
      name: "Techno Cool Associates – Mirpur Commercial Area",
      street: "Mirpur",
      city: "Dhaka",
      postalCode: "1216",
      country: "BD",
      lat: "23.8150",
      lng: "90.3650",
    },
    {
      name: "Techno Cool Associates – Fatullah Industrial Zone",
      street: "Fatullah",
      city: "Narayanganj",
      postalCode: "1422",
      country: "BD",
      lat: "23.6646",
      lng: "90.5260",
    },
    {
      name: "Techno Cool Associates – Agrabad Commercial Area",
      street: "Agrabad",
      city: "Chittagong",
      postalCode: "4100",
      country: "BD",
      lat: "22.3349",
      lng: "91.8276",
    },
    {
      name: "Techno Cool Associates – Halishahar Industrial Area",
      street: "Halishahar",
      city: "Chittagong",
      postalCode: "4212",
      country: "BD",
      lat: "22.3333",
      lng: "91.8437",
    },
    {
      name: "Techno Cool Associates – Patenga Industrial Zone",
      street: "Patenga",
      city: "Chittagong",
      postalCode: "4214",
      country: "BD",
      lat: "22.2910",
      lng: "91.7894",
    },
    {
      name: "Techno Cool Associates – Sitakunda Industrial Area",
      street: "Sitakunda",
      city: "Chittagong",
      postalCode: "4310",
      country: "BD",
      lat: "22.5701",
      lng: "91.7883",
    },
    {
      name: "Techno Cool Associates – Pahartali Industrial Area",
      street: "Pahartali",
      city: "Chittagong",
      postalCode: "4225",
      country: "BD",
      lat: "22.3611",
      lng: "91.8322",
    },
  ];

  return (
    <>
      {locations.map((loc, index) => {
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          additionalType: "https://schema.org/HVACBusiness",
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
