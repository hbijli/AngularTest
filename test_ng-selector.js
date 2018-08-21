
browser.manage().timeouts().implicitlyWait(5000);
var url = "https://ng-select.github.io/ng-select"

var sectionDatasources = element(by.xpath("//a[text()='Data sources']"));
var sectionMultiselect = element(by.xpath("//a[text()='Multiselect']"));

describe('GE code test', function() {

  beforeEach(function() {
    browser.get(url);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Data sources');
  });

  describe('Test Input', function(){
    let drop_down = element(by.xpath("//ng-select[1]/div/div/div[3]/input"));
    let option_label = element(by.xpath("//span[@class='ng-option-label']"));
    let not_found = element(by.xpath("//div[@class='ng-option ng-option-disabled']"));

    beforeEach(function() {
      sectionDatasources.click();
    });

    it('should show matches for complete search value.', function() {
      drop_down.clear();
      drop_down.sendKeys("Karyn Wright");
      //browser.sleep(5000);
      option_label.getText().then (function(text) {
        expect(text).toEqual("Karyn Wright");
      });
    });

    it('should show matches for partial search value.', function() {
      drop_down.clear();
      drop_down.sendKeys("Kar");
      option_label.getText().then (function(text) {
        expect(text).toEqual("Karyn Wright");
      });
    });

    it('should display appropriate not found message for non-existing value.', function() {
      drop_down.clear();
      drop_down.sendKeys("dffKar");

      not_found.getText().then (function(text) {
        expect(text).toEqual("Items not found");
      });
    });
  });

  describe('Test Multi Select', function(){
    let dd_select_multiple_elem = element(by.xpath("//ng-select[1]"));
    let dd_hide_selected_elem = element(by.xpath("//ng-select[2]"));

    beforeEach(function() {
      sectionMultiselect.click();
    });

    it('should be able to select multiple values.', function() {
      dd_select_multiple_elem.click();
      element(by.xpath("//span[text()='Karyn Wright']"));
      element(by.xpath("//span[text()='Franklin James']"));
      expect(element(by.xpath("//div[@class='ng-value']/span[text()='Karyn Wright']")).isDisplayed()).toBe(true);
      expect(element(by.xpath("//div[@class='ng-value']/span[text()='Franklin James']")).isDisplayed()).toBe(true);
    });
    it('should be able to hide selected values.', function() {});
    it('should be able to unselect values.', function() {});
    it('should be able to clear multiple selections.', function() {});
  });

  describe('Test Reactive Form', function(){
    it('should receive confirmation on selection.', function() {});
    it('should return error message when target page doesn\'t exist.', function() {});
  });

  describe('Test Dropdown position', function(){
    it('should display at bottom for default with no space constraint.', function() {});
    it('should display at top for default with space constraint.', function() {});
    it('should display at bottom for postion set to bottom.', function() {});
    it('should display at top for postion set to top.', function() {});
  });

  describe('Test Data Source', function(){
    it('should display from the data source.', function() {});
    it('should .', function() {});
    it('should .', function() {});
    it('should .', function() {});
  });

  describe('Test Data Binding ', function(){
    it('should bind to default label, object bindings .', function() {});
    it('should bind label to nested custom property.', function() {});
    it('should bind label and model to custom properties.', function() {});
  });

  describe('Test Filtering', function(){
    it('should be able to filter from custom fields.', function() {});
  });

  describe('Test Navigation', function(){
    it('should navigate to the correct page.', function() {});
    it('should return error message when target page doesnt exist.', function() {});
  });

});
