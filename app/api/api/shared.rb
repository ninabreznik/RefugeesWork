module API
  module Shared
  extend ActiveSupport::Concern

    included do
      before do
        #error!("401 Unauthorized", 401) unless valid_credentials?
      end

      helpers do
      end
    end
  end
end
