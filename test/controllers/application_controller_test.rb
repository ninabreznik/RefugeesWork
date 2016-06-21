require 'test_helper'

ApplicationController.class_eval do
  def any_action
    render nothing: true
  end
end

class ApplicationControllerTest < ActionController::TestCase

  def setup
    Rails.application.routes.draw do
      get 'any_action' => 'application#any_action'
    end
  end

  def teardown
    Rails.application.reload_routes!
  end

  test 'it falls back to english without a locale' do
    get :any_action
    assert_response :success
    assert_equal 'Welcome to REFUGEES WORK', I18n.t('static_pages.welcome.title')
  end

  test 'the passed locale is used for translation' do
    get :any_action, locale: 'es'
    assert_response :success
    assert_equal 'Bienvenido a REFUGEES WORK', I18n.t('static_pages.welcome.title')
  end

  test 'locale is mantained between requests' do
    skip('Not implemented due to https://github.com/rspec/rspec-rails/issues/255')
  end

  test 'if the locale does not exist it falls back to english' do
    get :any_action, locale: 'ru'
    assert_response :success
    assert_equal 'Welcome to REFUGEES WORK', I18n.t('static_pages.welcome.title')
  end
end
