// import Head from "next/head";

// export default function SeoHead({
//   title = "Techno Cool Associates | HVAC Solutions in Bangladesh",
//   description = "Bangladesh’s trusted HVAC engineering firm with 20+ years of experience. Experts in Daikin, LG & DB air conditioning systems for industrial and corporate clients.",
//   keywords = "HVAC Solutions in Bangladesh, HVAC Bangladesh, Daikin dealer Dhaka, LG air conditioning, VRV VRF system Bangladesh,industrial AC Bangladesh, HVAC contractor Dhaka, air cooled chiller, DB AC dealer, commercial HVAC company",
//   url = "http://localhost:3000",
//   image = "/seoImg.png",
//   phone = "+8801XXXXXXXXX",
//   locations = [
//     {
//       name: "Techno Cool Associates – Motijheel Office",
//       street: "Motijheel Commercial Area",
//       city: "Dhaka",
//       postalCode: "1000",
//       country: "BD",
//       lat: "23.7294",
//       lng: "90.4125",
//     },
//     {
//       name: "Techno Cool Associates – Gulshan Branch",
//       street: "Gulshan-2",
//       city: "Dhaka",
//       postalCode: "1212",
//       country: "BD",
//       lat: "23.7925",
//       lng: "90.4078",
//     },
//     {
//       name: "Techno Cool Associates – Narayanganj Site",
//       street: "Narayanganj Industrial Zone",
//       city: "Narayanganj",
//       postalCode: "1400",
//       country: "BD",
//       lat: "23.6238",
//       lng: "90.5000",
//     },
//   ],
// }) {
//   const structuredData = locations.map((loc) => ({
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     name: loc.name,
//     image: image.startsWith("http") ? image : `${url}${image}`,
//     "@id": url,
//     url: url,
//     telephone: phone,
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: loc.street,
//       addressLocality: loc.city,
//       postalCode: loc.postalCode,
//       addressCountry: loc.country,
//     },
//     geo: {
//       "@type": "GeoCoordinates",
//       latitude: loc.lat,
//       longitude: loc.lng,
//     },
//     description: description,
//     sameAs: ["http://localhost:3000"],
//   }));

//   return (
//     <Head>
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={keywords} />
//       <link rel="canonical" href={url} />
//       <meta name="robots" content="index, follow" />
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1" />

//       {/* Open Graph */}
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:type" content="website" />
//       <meta
//         property="og:image"
//         content={image.startsWith("http") ? image : `${url}${image}`}
//       />
//       <meta property="og:url" content={url} />

//       {/* Twitter */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta
//         name="twitter:image"
//         content={image.startsWith("http") ? image : `${url}${image}`}
//       />

//       {/* JSON-LD for all locations */}
//       {structuredData.map((data, i) => (
//         <script
//           key={i}
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
//         />
//       ))}
//     </Head>
//   );
// }
