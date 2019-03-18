require 'test_helper'

class EnemyControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get enemy_index_url
    assert_response :success
  end

  test "should get show" do
    get enemy_show_url
    assert_response :success
  end

end
