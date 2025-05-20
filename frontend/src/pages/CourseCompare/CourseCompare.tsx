import { useState } from 'react';

function CourseCompare() {
    const [code1, setCode1] = useState('');
    const [code2, setCode2] = useState('');
    const [info1, setInfo1] = useState<CourseInfo | null>(null);
    const [info2, setInfo2] = useState<CourseInfo | null>(null);
    const [error, setError] = useState('');

    interface CourseInfo {
        offeringTerms: string | null;
        deliveryModes: string[];
        conditionsText: string | null;
    }

    const fetchCourseInfo = async (code: string): Promise<CourseInfo | null>  => {
        const url = `https://www.handbook.unsw.edu.au/undergraduate/courses/2025/${code}`;
        try {
            const response = await fetch(url);
            const html = await response.text();
            console.log('Fetched HTML for:', code);
            console.log(html.slice(0, 500)); 

            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const offeringTerms = (doc.querySelector('[data-testid="AttrBody"] > div') as HTMLElement)?.innerText;
            const deliveryModes = [] as string[];
            doc.querySelectorAll('.css-vobmxd-Box--Box-Box-Card--CardBody.e12hqxty1').forEach(div => {
            const label = div.querySelector('span')?.innerText?.trim();
            if (label === 'Delivery Mode') {
                const modeText = div.childNodes[1]?.textContent?.trim();
                if (modeText) {
                deliveryModes.push(modeText);
                }
            }
            });
            const conditionsElement = doc.querySelector('#ConditionsforEnrolment .css-vobmxd-Box--Box-Box-Card--CardBody');
            const conditionsText = conditionsElement instanceof HTMLElement
                ? conditionsElement.textContent?.trim() ?? null
                : null;
      
            return { offeringTerms, deliveryModes, conditionsText };
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setInfo1(null);
        setInfo2(null);

        const [data1, data2] = await Promise.all([
            fetchCourseInfo(code1.toUpperCase()),
            fetchCourseInfo(code2.toUpperCase()),
        ]);

        if (!data1 || !data2) {
            setError('One or both course codes were not found.');
        } else {
            setInfo1(data1);
            setInfo2(data2);
        }
    };

    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={code1}
        onChange={(e) => setCode1(e.target.value)}
        placeholder="Course code 1"
      />
      <input
        type="text"
        value={code2}
        onChange={(e) => setCode2(e.target.value)}
        placeholder="Course code 2"
      />
      <button type="submit">Compare</button>

      {error && <p>{error}</p>}

      {info1 && (
        <div>
          <h2>Course 1 Info</h2>
          <p><strong>Terms:</strong> {info1.offeringTerms}</p>
          <p><strong>Delivery:</strong> {info1.deliveryModes.join(', ')}</p>
          <p><strong>Conditions:</strong> {info1.conditionsText}</p>
        </div>
      )}

      {info2 && (
        <div>
          <h2>Course 2 Info</h2>
          <p><strong>Terms:</strong> {info2.offeringTerms}</p>
          <p><strong>Delivery:</strong> {info2.deliveryModes.join(', ')}</p>
          <p><strong>Conditions:</strong> {info2.conditionsText}</p>
        </div>
      )}
    </form>
  );
}

export default CourseCompare;