describe('Login App Belajar Bareng', () => {
    after(async () => {
        await driver.terminateApp('com.example.belajar_bareng');
    });

    it('should login App Belajar Bareng', async () => {
        console.log('✅ Application opened successfully');
        
        await browser.pause(3000);

        //login
        let email = await $('//android.widget.EditText[@resource-id="email_input"]');
        let password = await $('//android.widget.EditText[@resource-id="password_input"]');

        await email.click();
        await email.setValue('dian@gmail.com');
        await password.click();
        await password.setValue('bismillah123');
        await $('~Login').click();
        
        const successMessage = await $('~Login berhasil');
        await successMessage.waitForDisplayed({ timeout: 10000 });
        //Assert success message displayed
        await expect(successMessage).toBeDisplayed();
        //Assert success message is Login berhasil
        await expect(successMessage).toHaveAttr('content-desc', 'Login berhasil');

        await browser.pause(3000);

    });

});