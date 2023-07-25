
    var d8ReaderMode = () => {
        // Cleaned CSS code without margins
        const cleanedCSS = `
          #boxright,
          #box1,
          #footer,
          .toplayer-shop,
          .commonbox1,
          #commentDiv,
          .activelist,
          #header {
            display: none;
          }
      
          #mainpart {
            margin: 0 auto;
            display : flex;
            justify-content: center;
          }
      
          .content {
            display: center;
          }
      
          #layout {
            margin: 0;
          }
      
          #pptContainer,
          #mainpart,
          #pageContainer,
          #mainPanel {
            width: fit-content;
          }
        `;
      
        // Regular expression to remove margins
        const regex = /margin-right:\s*\d+px\s*!important;|margin-right:\s*\d+px;|min-height:\s*\d+px;/g;
        const cleanedCSSWithoutMargins = cleanedCSS.replace(regex, '');
      
        // Create a new style element and append the cleaned CSS without margins
        const styleElement = document.createElement('style');
        styleElement.innerHTML = cleanedCSSWithoutMargins;
        document.head.appendChild(styleElement);
      
        // Load all the content of the page.
        const button = document.querySelector("#continueButton");
        button.click();


        // clean the last elements that the first cleaner couldn't handle
        var element = document.querySelector("#mainPanel");
        element.className = "kiriku" 

        element = document.querySelector("#mainpart");
        element.style.width = "fit-content"
        
      };

      // Call the function to apply the changes
      doc88ReaderMode();