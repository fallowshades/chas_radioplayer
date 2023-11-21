# QnA

## OWASP

### What is OWASP and what is its primary mission as described in the article?

OWASP är ett project vars syfte är att utge information angåend hur en utvecklare kan öka ens web applikationers säkerhet. Cloudflare rekommenderar att börja läsa om projectet OWSASP top 10.

### Explain the concept of "Injection". Provide an example of how an injection attack could compromise a web application's security.

i samband med roll baserade applikationr är det vanligt med att en användare förs behöver identifiera sig för att komma åt en del av databasen. eftersom att ett form element skickar data finns det en risk att datan innehåller instruktioner (injection attack) som kan orsaka oväntade säkerhet problem. åtgärden är att först validera och/eller sannera datan som skickas.

### Explain two strategies to prevent Broken Authentication vulnerabilities.

rollbaserade applikationer sätter olika privilegier att utforska databasen beroend på användare. Admin, är en roll som vanligtvis har tillgång till hela databasen. Om npgon utnyttjar rollen som admin som en admin själv eller någon som kommit år kontot utnyttjar listan av användarnamn och lösenord och logga in i deras namn. en metod för att förhindra eller minska risken för autentiseringssårbarheter är 2FA (two-factor authentication)

### Describe the potential consequences of Insecure Deserialization in web applications. How can developers protect against such attacks?

REST och andra kommunikations protokoll kräver att applikationer serialisera och deserialisera data så att objekt kan formateras och lagras. om objektet blir manipulerad (eng tampered) innan de deserialiseras utan säkerhets åtgärder förekommer en så kallad "insecure deserialization exploit". den ända metoden som säkert stoppar sårbarheten är att förbjuda deserialisering av data från opålitliga källor.

### Briefly define Cross-Site Scripting (XSS) as outlined in the article and list two methods suggested in the article to prevent XSS attacks in web applications.

Via browserns url kan kod navigerar användare till olika sidor. om användare har möjlighet att skriva egna länkar och dela med andra användare. dessa länkar är en säkerhets risk då extra javaskript kod kan förekomma. Cloudflare föreslår att undervika HTTP och validera och sanera användare genererad innehåll.

## WCAG

### Explain the importance of semantic elements in web development according to accessibility guidelines. Provide examples of at least two semantic HTML elements and clarify how they enhance accessibility for users with disabilities.

element om förklarar innehållet ökar tillgängligheten för användare med vissa funkntionsnedsättningar. en websitas viktigaste funktioner är att interargera och att navigera med <button> och <a> elementen. genom att placera dessa element i semantiska element så som <article> eller <nav> tydliggörs vad dessa element har för effekt. en användares interaktion kan exempelvis modifiera en url och/eller skicka REST förfrågningar till en api.

### Describe the significance of color contrast in web design concerning accessibility. How does adhering to color contrast guidelines benefit users with visual impairments, and what are the recommended contrast ratios as per WCAG standards?

designen på ens websita påverkar alla typer av användare. läsbarheten mellan bakgrund och förgrund beror på ljus från omgivningen och användarens syn förmåga. färg contrast mäts i en skala mellan 1 till 21 där 21 representerar en skärm med svart text och vit bakgrund. WCAG rekomendation beror på innehål vars ratio för `body` text bör uppnå en minimum ratio på skalan 4.5:1 resterande innehål bör minimum vara 3:1 (https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)

### Discuss the role of alternative text (alt text) for images in accordance with accessibility guidelines. Why is it crucial to include descriptive alt text, and how does this contribute to making web content more accessible? Provide examples to illustrate your explanation.

en alternativ text är lämplig för två ändamål. först under tiden som bilden datan hämtas är det mer användarvänligt att visa något på användarens display. sedan är det även något som en screen reader kan läsa och har samma fördel som semantiska element, dvs förklarare vad som ska eller som redan kan uppfattas med ögonen.

### Explain the purpose of landmarks in creating accessible web content. How do landmarks aid in navigation for users of assistive technologies, and can you provide examples of commonly used landmark elements in HTML?

varför/hur: läsbarhet för screen readers
vanligt förekommande element: header, nav, main, aside, section

### Describe the significance of proper form labeling. Why is it important to label form elements, and what strategies can developers implement to ensure effective labeling for improved accessibility?

rätt ska vara rätt och det är viktigt att användaren och förstå och använda de interaktiva element som finns. `label` är en fördel, som underlättar använding för personer som använder screen readers och för de som har sämre precition och tycker att det är svårt att trycka på sådana element som t.ex. radio knappar och cheeckboxes. ibland är det utvecklarens fel. Då en eller flera input ska skickas kan attribut så som `required` och `aria-required=true` vara användbara metoder för att tillägga form controll. förhoppningsvis har användaren inga besvär, men det är bra att ta i extra för att se till att allt fungerar som det ska.
