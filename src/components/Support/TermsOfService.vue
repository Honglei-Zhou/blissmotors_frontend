<template>

<div class="row">
    <div class="leftcolumn">

    </div>

    <div class="maincolumn">
        <div class="service-wrapper">
            <div class="title">
                {{tos.title}}
            </div>
            <div class="intro">
                <div class="intro-title">
                {{tos.intro.title}}
                </div>
                <div class="intro-content">
                    <div style="margin-bottom: 20px;" v-for="(content, index) in tos.intro.contents" :key="index">
                    <p  class="content-p">{{content}}</p>
                    </div>
                </div>
            </div>
            <div class="details">
                <ul v-for="(detail, index) in tos.details" :key="index">
                    <div class="detail-title">
                        {{detail.title}}
                    </div>
                    <li v-for="(content, index) in detail.contents" :key="index" class="detail-content">
                        <p class="content-p">{{content}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="rightcolumn">

    </div>

</div>

</template>

<script>

export default {
  name: 'TermsOfService',
  data () {
    return {
      tos: {
        title: 'Terms of Service',
        intro: {
          title: 'Last Updated December 2, 2018',
          contents: [
            'These Terms of Service ("Terms") constitute a legally binding agreement ("Agreement") between you and Bliss Motors, LLC ("Bliss") governing your access to and use of the Bliss website, our mobile, tablet and other smart device applications, and application program interfaces (collectively, "Application") and all associated services (collectively, "Bliss Services"). The Site, Application and Bliss Services together are hereinafter collectively referred to as the “Bliss Platform”.',
            'When these Terms mention “Bliss,” “we,” “us,” or “our,” it refers Bliss Motors, LLC.',
            'Our collection and use of personal information in connection with your access to and use of the Bliss Platform is described in our Privacy Policy.'
          ]
        },
        details: [
          {
            title: 'Eligibility, Using the Bliss Platform',
            contents: [
              'You must be at least 18 years old and able to enter into legally binding contracts to access and use the Bliss Platform or register a Bliss Account. By accessing or using the Bliss Platform you represent and warrant that you are 18 or older and have the legal capacity and authority to enter into a contract.',
              'Bliss may make access to and use of the Bliss Platform, or certain areas or features of the Bliss Platform, subject to certain conditions or requirements, such as completing a verification process, meeting specific quality or eligibility criteria.',
              'The access to or use of certain areas and features of the Bliss Platform may be subject to separate policies, standards or guidelines, or may require that you accept additional terms and conditions. If there is a conflict between these Terms and terms and conditions applicable to a specific area or feature of the Bliss Platform, the latter terms and conditions will take precedence with respect to your access to or use of that area or feature, unless specified otherwise.'
            ]
          },
          {
            title: 'Scope of Bliss Services',
            contents: [
              'The Bliss Platform is an online marketplace that enables registered users (“Members”) to enter into a limited agency relationship with Bliss to find great deals on car leases.',
              'You agree to appoint Bliss to represent you in negotiating a car leasing agreement in exchange for a fee of $____ (“retainer”). The retainer is not refundable. Bliss does not guarantee any results.'
            ]
          },
          {
            title: 'Liability',
            contents: [
              'You acknowledge and agree that, to the maximum extent permitted by law, the entire risk arising out of your access to and use of the Bliss Platform remains with you. Bliss will not be liable for any incidental, special, exemplary or consequential damages, including lost profits, loss of data or loss of goodwill, service interruption, computer damage or system failure or the cost of substitute products or services, or for any damages for personal or bodily injury or emotional distress arising out of or in connection with these Terms or from the use of or inability to use the Bliss Platform.'
            ]
          },
          {
            title: 'Indemnification',
            contents: [
              'You agree to release, defend (at Bliss’ option), indemnify, and hold Bliss and its officers, directors, employees and agents, harmless from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your breach of these Terms or our Policies or Standards; your improper use of the Bliss Platform; Bliss’ Collection and Remittance of Taxes, or (v) your breach of any laws, regulations or third party rights.'
            ]
          },
          {
            title: 'Dispute Resolution',
            contents: [
              'In case of any dispute arising from this agreement, you agree that Bliss’ liability shall not exceed the amount of the retainer. You agree to submit to the jurisdiction of Illinois courts, and that any disputes arising out of this agreement shall be governed by Illinois law.'
            ]
          },
          {
            title: 'Payment Terms',
            contents: [
              'You authorize Bliss to charge your credit card the amount of retainer. You represent and warrant that you are an authorized user of the credit card that you have provided to Bliss.'
            ]
          },
          {
            title: 'General Provisions',
            contents: [
              'Except as they may be supplemented by additional terms and conditions, policies, guidelines or standards, these Terms constitute the entire Agreement between Bliss and you pertaining to the subject matter hereof, and supersede any and all prior oral or written understandings or agreements between Bliss and you in relation to the access to and use of the Bliss Platform.'
            ]
          },
          {
            title: 'Privacy',
            contents: [
              'We ask for and collect the following personal information about you when you use the Bliss Platform: account and payment information. This information is necessary for the adequate performance of the contract between you and us and to allow us to comply with our legal obligations. Without it, we may not be able to provide you with all the requested services. When you sign up for a Bliss Account, we require certain information such as your first name, last name, email address, and date of birth. To use certain features of the Bliss Platform, we may require you to provide certain financial information (like your bank account or credit card information) in order to facilitate the processing of payments. We use, store, and process information, including personal information, about you to provide, understand, improve, and develop the Bliss Platform, create and maintain a trusted and safer environment and comply with our legal obligations.'
            ]
          },
          {
            title: 'Modification of these Terms',
            contents: [
              'Bliss reserves the right to modify these Terms at any time in accordance with this provision. If we make changes to these Terms, we will post the revised Terms on the Bliss Platform and update the “Last Updated” date at the top of these Terms. We will also provide you with notice of the modifications by email at least thirty (30) days before the date they become effective. If you disagree with the revised Terms, you may terminate this Agreement with immediate effect. We will inform you about your right to terminate the Agreement in the notification email. If you do not terminate your Agreement before the date the revised Terms become effective, your continued access to or use of the Bliss Platform will constitute acceptance of the revised Terms.'
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.service-wrapper {
    width: 100%;
    margin: 50px;
    padding: 20px 50px;
}

.title {
    width: 100%;
    height: 80px;
    line-height: 50px;
    font-size: 25px;
    font-weight: 700;
}

.intro {
    width: 100%;
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.intro-title {
    height: 50px;
    font-size: 15px;
}

.intro-content {
    line-height: 30px;
    text-align: left;

}
.content-p {
    font-size: 16px;
    font-weight: 400;
}

.details {
    width: 100%;
    margin-top: 10px;
    padding: 0px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.detail-title {
    height: 50px;
    font-size: 18px;
    text-align: left;
    font-weight: 700;
}

.detail-content {
    line-height: 30px;
    text-align: left;
    list-style-type: decimal;
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;
    margin-bottom: 20px;
}

</style>
