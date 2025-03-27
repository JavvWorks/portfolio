import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TestAOS = () => {
    useEffect(() => {
        // AOS initialization
        AOS.init();

        // Function to check will-change property
        const checkWillChange = () => {
            // Fetch all elements with data-aos
            const aosElements = document.querySelectorAll('[data-aos]');
            
            console.log(`Found ${aosElements.length} elemen dengan data-aos`);
            
            aosElements.forEach((element, index) => {
                // Add a border to the element
                element.style.border = '2px dashed red';
                
                // Takes computed style
                const computedStyle = window.getComputedStyle(element);
                const willChange = computedStyle.getPropertyValue('will-change');
                
                console.log(`Element ${index + 1}:`, {
                    'data-aos': element.getAttribute('data-aos'),
                    'will-change': willChange,
                    'element': element.tagName,
                    'classes': element.className
                });
            });
        };

        // Run checks after AOS is initialized
        setTimeout(checkWillChange, 100);
    }, []);

    return (
        <>
            <style>
                {`
                    [data-aos] {
                        will-change: transform, opacity !important;
                    }
                `}
            </style>

           
        </>
    );
};

export default TestAOS;
